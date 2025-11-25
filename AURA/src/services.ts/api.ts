// src/services.ts/api.ts
const API_URL = "https://deskaura-backend.onrender.com/api";

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    const text = await response.text();
    let msg = text;
    try {
      const json = JSON.parse(text);
      msg = json.error || json.message || JSON.stringify(json);
    } catch {}
    throw new Error(msg || `Erro ${response.status}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) return await response.json();
  return await response.text();
}

function getAuthHeader(): HeadersInit {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// === SIMULAÇÕES SIMPLIFICADAS ===
export async function salvarSimulacao(simulacaoData: {
  cultura: string;
  solo: string;
  adubo: string;
  regiao: string;
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
