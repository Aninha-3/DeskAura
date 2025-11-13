import { useState } from "react";
import { salvarSimulacao } from "../../services.ts/api";
import styles from "./simulador.module.css";

export default function Simulador() {
  const [cultura, setCultura] = useState("");
  const [solo, setSolo] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [msg, setMsg] = useState("");

  const calcularScore = () => {
    const score = Math.floor(Math.random() * 100);
    setResultado(score);
    return score;
  };

  const handleSimular = async () => {
    if (!cultura || !solo) {
      setMsg("Por favor, selecione cultura e tipo de solo antes de simular.");
      return;
    }
    const score = calcularScore();
    try {
      await salvarSimulacao(cultura, solo, score);
      setMsg("✅ Simulação salva com sucesso!");
    } catch {
      setMsg("❌ Erro ao salvar simulação.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Simulador de Plantio</h1>
          <p className={styles.subtitle}>
            Escolha a cultura e o tipo de solo para gerar uma previsão de score.
          </p>
        </header>

        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Preencha as informações</h2>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Cultura</label>
            <select
              value={cultura}
              onChange={(e) => setCultura(e.target.value)}
              className={styles.formSelect}
            >
              <option value="">Selecione a cultura</option>
              <option value="Milho">Milho</option>
              <option value="Soja">Soja</option>
              <option value="Feijão">Feijão</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Tipo de Solo</label>
            <select
              value={solo}
              onChange={(e) => setSolo(e.target.value)}
              className={styles.formSelect}
            >
              <option value="">Selecione o tipo de solo</option>
              <option value="Arenoso">Arenoso</option>
              <option value="Argiloso">Argiloso</option>
            </select>
          </div>

          <button onClick={handleSimular} className={styles.analyzeButton}>
            Simular
          </button>

          {resultado !== null && (
            <div className={styles.resultContainer}>
              <h2 className={styles.resultsTitle}>Resultado</h2>
              <p>
                Score estimado: <strong>{resultado}%</strong>
              </p>
            </div>
          )}

          {msg && <p style={{ textAlign: "center", marginTop: "10px" }}>{msg}</p>}
        </div>
      </div>
    </div>
  );
}
