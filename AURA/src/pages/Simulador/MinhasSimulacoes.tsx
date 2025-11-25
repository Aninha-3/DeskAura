// src/pages/Simulador/MinhasSimulacoes.tsx
import { useEffect, useState } from "react";
import { listarSimulacoes } from "../../services.ts/api";
import styles from "./Simulador.module.css";

export default function MinhasSimulacoes() {
  const [lista, setLista] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await listarSimulacoes();
        setLista(data);
      } catch (err: any) {
        setErro(err.message || "Erro ao buscar simulações");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className={styles.simuladorContainer}>
      <h1>Minhas Simulações</h1>
      {loading && <p>Carregando...</p>}
      {erro && <p className={styles.errorText}>{erro}</p>}
      {!loading && !lista.length && <p>Nenhuma simulação encontrada.</p>}
      <div>
        {lista.map((s) => (
          <div key={s.id} className={styles.resultadoBox} style={{ marginBottom: 12 }}>
            <p><b>Data:</b> {new Date(s.data).toLocaleString()}</p>
            <p><b>Cultura:</b> {s.cultura}</p>
            <p><b>Score:</b> {s.score}</p>
            <p><b>Produtividade:</b> {s.produtividade} sacas/ha</p>
            <p><b>Recomendações:</b></p>
            <ul>
              {(s.recomendacoes || []).map((r: string, i: number) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
