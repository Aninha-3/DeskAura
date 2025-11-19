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

// === ALTERAR SENHA (perfil logado) ===
export async function atualizarSenha(senhaAntiga: string, novaSenha: string) {
  const token = localStorage.getItem("token");

  return await fetchAPI("/atualizar-senha", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ senhaAtual: senhaAntiga, novaSenha }),
  });
}

// ============================================
// === NOVO FLUXO DE RECUPERAÇÃO DE SENHA =====
// ============================================

// 1️⃣ Solicitar código
export async function solicitarCodigo(email: string) {
  return await fetchAPI("/esqueci-senha", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
}

// 2️⃣ Validar código
export async function verificarCodigo(email: string, codigo: string) {
  return await fetchAPI("/validar-codigo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, codigo }),
  });
}

// 3️⃣ Redefinir senha
export async function redefinirSenha(email: string, novaSenha: string) {
  return await fetchAPI("/redefinir-senha", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, novaSenha }),
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
