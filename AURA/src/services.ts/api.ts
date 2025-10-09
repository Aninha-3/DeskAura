// src/services/api.ts

const API_URL = "https://deskaura-backend.onrender.com";

// Função para fazer requisições com tratamento de erro
async function fetchAPI(endpoint: string, options: RequestInit) {
    const url = `${API_URL}${endpoint}`;
    
    try {
        const response = await fetch(url, options);
        
        // Se a resposta não for OK, tenta extrair a mensagem de erro
        if (!response.ok) {
            let errorMessage = `Erro ${response.status}: ${response.statusText}`;
            
            // Tenta ler a resposta como texto para ver se há uma mensagem de erro
            try {
                const text = await response.text();
                if (text) {
                    errorMessage = text;
                }
            } catch (e) {
                // Ignora erros ao ler o texto
            }
            
            throw new Error(errorMessage);
        }
        
        // Tenta parsear a resposta como JSON
        try {
            return await response.json();
        } catch (e) {
            throw new Error("Resposta do servidor não é JSON válido");
        }
    } catch (error) {
        if (error instanceof TypeError) {
            // Erro de rede ou CORS
            throw new Error("Erro de conexão. Verifique se o backend está online e acessível.");
        }
        throw error;
    }
}

export async function cadastrarUsuario(nome: string, email: string, senha: string) {
    const data = await fetchAPI("/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
    });

    // Salva o token
    if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
    }

    return data;
}

export async function loginUsuario(email: string, senha: string) {
    const data = await fetchAPI("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
    });

    // Salva o token
    if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
    }

    return data;
}

// Teste de conexão
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