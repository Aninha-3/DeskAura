// src/pages/Simulador/Simulador.tsx
import { useState } from "react";
import { salvarSimulacao } from "../../services.ts/api";
import styles from "./Simulador.module.css";

type FormType = {
  cultura: string;
  solo: string;
  adubo: string;
  regiao: string;
};

export default function Simulador() {
  const [form, setForm] = useState<FormType>({
    cultura: "milho",
    solo: "Latossolo",
    adubo: "organico",
    regiao: "sudeste",
  });

  const [resultado, setResultado] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Função para normalizar os valores antes de enviar
  function normalizarValores(form: FormType) {
    return {
      cultura: form.cultura.charAt(0).toUpperCase() + form.cultura.slice(1),
      solo: form.solo,
      adubo: form.adubo.charAt(0).toUpperCase() + form.adubo.slice(1),
      regiao: form.regiao
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(""),
    };
  }

 async function enviarSimulacao() {
  setErro(null);
  setResultado(null);
  try {
    setLoading(true);

    const dataToSend = {
      ...normalizarValores(form),
      chuva_mm: 120,
      temperatura: 25,
      ph: 6.2,
      nitrogenio: 40,
      fosforo: 30,
      potassio: 50,
      risco_pragas: 10,
    };

    const data = await salvarSimulacao(dataToSend);
    setResultado(data);
  } catch (err: any) {
    console.error("Erro salvarSimulacao:", err);
    setErro(err.message || "Erro ao processar simulação");
  } finally {
    setLoading(false);
  }
}


  return (
    <div className={styles.simuladorContainer}>
      <h1>Simulador Agrícola AURA</h1>
      <p>Preencha os dados abaixo:</p>

      <div className={styles.form}>
        <label>Cultura</label>
        <select name="cultura" value={form.cultura} onChange={handleChange}>
          <option value="feijao">Feijão</option>
          <option value="milho">Milho</option>
          <option value="mandioca">Mandioca</option>
          <option value="hortalicas">Hortaliças</option>
          <option value="frutas">Frutas</option>
          <option value="arroz">Arroz</option>
          <option value="cafe">Café</option>
        </select>

        <label>Tipo de Solo</label>
        <select name="solo" value={form.solo} onChange={handleChange}>
          <option value="Latossolo">Latossolo</option>
          <option value="Argissolo">Argissolo</option>
          <option value="Neossolo">Neossolo</option>
          <option value="Nitossolo">Nitossolo</option>
          <option value="Gleissolo">Gleissolo</option>
          <option value="Cambissolo">Cambissolo</option>
        </select>

        <label>Adubo</label>
        <select name="adubo" value={form.adubo} onChange={handleChange}>
          <option value="organico">Orgânico</option>
          <option value="mineral">Mineral</option>
        </select>

        <label>Região</label>
        <select name="regiao" value={form.regiao} onChange={handleChange}>
          <option value="norte">Norte</option>
          <option value="nordeste">Nordeste</option>
          <option value="centro-oeste">Centro-Oeste</option>
          <option value="sudeste">Sudeste</option>
          <option value="sul">Sul</option>
        </select>

        <button onClick={enviarSimulacao} disabled={loading}>
          {loading ? "Calculando..." : "Simular"}
        </button>

        {erro && <p className={styles.errorText}>{erro}</p>}
      </div>

      {resultado && (
        <div className={styles.resultadoBox}>
          <h2>Resultado da Simulação</h2>
          <p>
            <b>Score Final:</b> {resultado.score}
          </p>
          <p>
            <b>Produtividade estimada:</b> {resultado.produtividade} sacas/ha
          </p>

          <h3>Recomendações:</h3>
          <ul>
            {resultado.recomendacoes?.map((r: string, i: number) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
