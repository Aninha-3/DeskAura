// src/services.ts/api.ts
const API_URL = "https://deskaura-backend.onrender.com/api";

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  const response = await fetch(url, options);

  // tenta parsear JSON de erro (se tiver) para mensagem mais amigável
  if (!response.ok) {
    const text = await response.text();
    let msg = text;
    try {
      const json = JSON.parse(text);
      msg = json.error || json.message || JSON.stringify(json);
    } catch {
      // text permanece
    }
    throw new Error(msg || `Erro ${response.status}`);
  }

  // tenta parsear JSON normal
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return await response.json();
  }
  return await response.text();
}

// === AUTH helpers ===
function getAuthHeader(): HeadersInit {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// === CADASTRAR USUÁRIO ===
export async function cadastrarUsuario(nome: string, email: string, senha: string) {
  const data = await fetchAPI("/cadastro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha }),
  });

  if ((data as any).token) {
    localStorage.setItem("token", (data as any).token);
    localStorage.setItem("user", JSON.stringify((data as any).user));
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

  if ((data as any).token) {
    localStorage.setItem("token", (data as any).token);
    localStorage.setItem("user", JSON.stringify((data as any).user));
  }
  return data;
}

// === PERFIL ===
export async function getPerfil() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado");

  return await fetchAPI("/perfil", {
    method: "GET",
    headers: { ...getAuthHeader(), "Content-Type": "application/json" },
  });
}

// === ALTERAR SENHA (perfil logado) ===
export async function atualizarSenha(senhaAntiga: string, novaSenha: string) {
  return await fetchAPI("/atualizar-senha", {
    method: "PUT",
    headers: { ...getAuthHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({ senhaAtual: senhaAntiga, novaSenha }),
  });
}

// ============================================
// === FLUXO RECUPERAÇÃO DE SENHA ============
// ============================================
export async function solicitarCodigo(email: string) {
  return await fetchAPI("/esqueci-senha", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
}

export async function verificarCodigo(email: string, codigo: string) {
  return await fetchAPI("/validar-codigo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, codigo }),
  });
}

export async function redefinirSenha(email: string, codigo: string, novaSenha: string) {
  return await fetchAPI("/redefinir-senha", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, codigo, novaSenha }),
  });
}

// ============================================
// === SIMULAÇÕES (AGRO) - atualizado ========
// ============================================

// salvarSimulacao agora espera um objeto com TODOS os campos que o backend espera
export async function salvarSimulacao(simulacaoData: {
  cultura: string;
  solo: string;
  chuva_mm: number;
  temperatura: number;
  ph: number;
  nitrogenio: number;
  fosforo: number;
  potassio: number;
  risco_pragas: number;
}) {
  return await fetchAPI("/simulacoes", {
    method: "POST",
    headers: { ...getAuthHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(simulacaoData),
  });
}

export async function listarSimulacoes() {
  return await fetchAPI("/simulacoes", {
    method: "GET",
    headers: { ...getAuthHeader(), "Content-Type": "application/json" },
  });
}
