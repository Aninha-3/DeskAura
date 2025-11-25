// src/pages/Simulador/Simulador.tsx
import { useState } from "react";
import { salvarSimulacao } from "../../services.ts/api";
import styles from "./Simulador.module.css"; // seu arquivo CSS module

export default function Simulador() {
  const [form, setForm] = useState({
    cultura: "milho",
    solo: "argiloso",
    chuva_mm: 120,
    temperatura: 28,
    ph: 6.0,
    nitrogenio: 80,
    fosforo: 40,
    potassio: 50,
    risco_pragas: 20,
  });

  const [resultado, setResultado] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  function handleChange(e: any) {
    const value = e.target.type === "number" ? Number(e.target.value) : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  }

  async function enviarSimulacao() {
    setErro(null);
    setResultado(null);
    try {
      setLoading(true);
      const data = await salvarSimulacao({
        ...form,
        // garante types corretos
        chuva_mm: Number(form.chuva_mm),
        temperatura: Number(form.temperatura),
        ph: Number(form.ph),
        nitrogenio: Number(form.nitrogenio),
        fosforo: Number(form.fosforo),
        potassio: Number(form.potassio),
        risco_pragas: Number(form.risco_pragas),
      });
      setResultado(data);
    } catch (err: any) {
      console.error("Erro salvarSimulacao:", err);
      // mensagem mais legível
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
          <option value="milho">Milho</option>
          <option value="soja">Soja</option>
          <option value="trigo">Trigo</option>
          <option value="feijao">Feijão</option>
        </select>

        <label>Tipo de Solo</label>
        <select name="solo" value={form.solo} onChange={handleChange}>
          <option value="argiloso">Argiloso</option>
          <option value="misto">Misto</option>
          <option value="arenoso">Arenoso</option>
        </select>

        <label>Chuva (mm)</label>
        <input type="number" name="chuva_mm" value={form.chuva_mm} onChange={handleChange} />

        <label>Temperatura (°C)</label>
        <input type="number" name="temperatura" value={form.temperatura} onChange={handleChange} />

        <label>pH do Solo</label>
        <input type="number" step="0.1" name="ph" value={form.ph} onChange={handleChange} />

        <label>Nitrogênio (N)</label>
        <input type="number" name="nitrogenio" value={form.nitrogenio} onChange={handleChange} />

        <label>Fósforo (P)</label>
        <input type="number" name="fosforo" value={form.fosforo} onChange={handleChange} />

        <label>Potássio (K)</label>
        <input type="number" name="potassio" value={form.potassio} onChange={handleChange} />

        <label>Risco de Pragas (%)</label>
        <input type="number" name="risco_pragas" value={form.risco_pragas} onChange={handleChange} />

        <button onClick={enviarSimulacao} disabled={loading}>
          {loading ? "Calculando..." : "Simular"}
        </button>

        {erro && <p className={styles.errorText}>{erro}</p>}
      </div>

      {resultado && (
        <div className={styles.resultadoBox}>
          <h2>Resultado da Simulação</h2>
          <p><b>Score Final:</b> {resultado.score}</p>
          <p><b>Produtividade estimada:</b> {resultado.produtividade} sacas/ha</p>

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
