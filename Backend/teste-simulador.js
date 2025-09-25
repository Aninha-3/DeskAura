import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

async function testeSimulador() {
  try {
    const response = await fetch("http://localhost:3000/simulador", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tipoSolo: "arenoso",
        nivelPh: "neutro",
        insolacao: "alta",
        desejo: "Tomate"
      }),
    });

    const data = await response.json();
    console.log("Resposta do backend:", data);
  } catch (err) {
    console.error("Erro no teste:", err);
  }
}

console.log("HF_API_KEY:", process.env.HF_API_KEY);

testeSimulador();
