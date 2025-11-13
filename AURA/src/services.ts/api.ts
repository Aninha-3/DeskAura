// src/services/api.ts

const API_URL = "https://deskaura-backend.onrender.com/api";

// =====================================================
// Função genérica de requisições com tratamento de erros
// =====================================================
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}${endpoint}`;

  try {
    const response = await fetch(url, options);

    // Se a resposta não for OK
    if (!response.ok) {
      let errorMessage = `Erro ${response.status}: ${response.statusText}`;
      try {
        const text = await response.text();
        if (text) errorMessage = text;
      } catch (_) {}
      throw new Error(errorMessage);
    }

    // Retorna o JSON parseado
    try {
      return await response.json();
    } catch {
      throw new Error("Resposta do servidor não é um JSON válido");
    }

  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Erro de conexão. Verifique se o backend está online e acessível.");
    }
    throw error;
  }
}

// =====================================================
// 📦 CADASTRAR USUÁRIO
// =====================================================
export async function cadastrarUsuario(nome: string, email: string, senha: string) {
  const data = await fetchAPI("/cadastro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha }),
  });

  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
}

// =====================================================
// 🔐 LOGIN DO USUÁRIO
// =====================================================
export async function loginUsuario(email: string, senha: string) {
  const data = await fetchAPI("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
}

// =====================================================
// 👤 BUSCAR PERFIL AUTENTICADO
// =====================================================
export async function getPerfil() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado.");

  return await fetchAPI("/perfil", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}

// =====================================================
// 🧠 TESTAR CONEXÃO COM O BACKEND
// =====================================================
export async function testConnection() {
  try {
    const response = await fetch(`${API_URL}/health`);
    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      return { success: false, error: `Erro ${response.status}` };
    }
  } catch (error) {
    return { success: false, error };
  }
}
