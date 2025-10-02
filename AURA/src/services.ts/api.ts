// src/services/api.ts

const API_URL = "http://localhost:3000"; 

//Importação do backend no nosso front
export async function cadastrarUsuario(nome: string, email: string, senha: string) {
  try {

    //Fetch - Envia requisições HTTP / Method: POST - Envia dados para o servidor
    const response = await fetch(`${API_URL}/api/cadastro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, senha }),
    });
    if (!response.ok) {
      throw new Error("Erro ao cadastrar usuário");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no cadastrar Usuario:", error);
    throw error;
  }
}
