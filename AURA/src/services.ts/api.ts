const API_URL = "https://deskaura-backend.onrender.com/api";

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    const msg = await response.text();
    throw new Error(msg || `Erro ${response.status}`);
  }

  return await response.json();
}

// === CADASTRAR USUÁRIO ===
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

// === LOGIN ===
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

// === PERFIL ===
export async function getPerfil() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado");

  return await fetchAPI("/perfil", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
}

// === ALTERAR SENHA ===
export async function atualizarSenha(senhaAntiga: string, novaSenha: string) {
  const token = localStorage.getItem("token");

  return await fetchAPI("/atualizar-senha", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      senhaAtual: senhaAntiga, // ✅ agora o backend recebe o nome certo
      novaSenha,
    }),
  });
}


// === SALVAR SIMULAÇÃO ===
export async function salvarSimulacao(cultura: string, solo: string, score: number) {
  const token = localStorage.getItem("token");
  return await fetchAPI("/simulacoes", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cultura, solo, score }),
  });
}

// === LISTAR SIMULAÇÕES ===
export async function listarSimulacoes() {
  const token = localStorage.getItem("token");
  return await fetchAPI("/simulacoes", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
}
