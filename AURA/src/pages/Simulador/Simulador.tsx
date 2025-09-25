import { useState } from "react";
import styles from "./Simulador.module.css";

type Solo = "arenoso" | "argiloso" | "misturado" | "";
type PH = "ácido" | "neutro" | "alcalino" | "";
type Insolacao = "baixa" | "média" | "alta" | "";

interface Sugestao {
  nome: string;
  terra: string;
  ph: string;
  insolacao: string;
  compatibilidade: number;
}

export default function Simulador() {
  const [tipoSolo, setTipoSolo] = useState<Solo>("");
  const [nivelPh, setNivelPh] = useState<PH>("");
  const [insolacao, setInsolacao] = useState<Insolacao>("");
  const [desejo, setDesejo] = useState("");
  const [resultado, setResultado] = useState<Sugestao[] | null>(null);

  function analisar() {
    // Simulação simples – em um projeto real você chamaria uma API
    const dados: Sugestao[] = [
      { nome: "Cenoura", terra: "arenoso", ph: "neutro", insolacao: "alta", compatibilidade: 95 },
      { nome: "Batata", terra: "argiloso", ph: "ácido", insolacao: "média", compatibilidade: 85 },
      { nome: "Feijão", terra: "misturado", ph: "neutro", insolacao: "alta", compatibilidade: 78 },
      { nome: "Ervilha", terra: "arenoso", ph: "neutro", insolacao: "baixa", compatibilidade: 60 },
      { nome: "Alface", terra: "argiloso", ph: "alcalino", insolacao: "baixa", compatibilidade: 40 },
    ];

    // Exemplo de filtro simples
    const filtrado = dados
      .map(item => ({
        ...item,
        compatibilidade: item.compatibilidade -
          (tipoSolo && item.terra !== tipoSolo ? 20 : 0) -
          (nivelPh && item.ph !== nivelPh ? 20 : 0) -
          (insolacao && item.insolacao !== insolacao ? 20 : 0),
      }))
      .sort((a, b) => b.compatibilidade - a.compatibilidade);

    setResultado(filtrado);
  }

  function resetar() {
    setResultado(null);
    setTipoSolo("");
    setNivelPh("");
    setInsolacao("");
    setDesejo("");
  }

  return (
    <div className={styles.container}>
      {!resultado ? (
        <div className={styles.formBox}>
          <h1>Simulador de Plantio Inteligente</h1>
          <p>Descubra o que plantar em seu tipo de terra e receba orientações personalizadas</p>

          <label>Tipo de solo:</label>
          <select value={tipoSolo} onChange={e => setTipoSolo(e.target.value as Solo)}>
            <option value="">Selecione</option>
            <option value="arenoso">Arenoso</option>
            <option value="argiloso">Argiloso</option>
            <option value="misturado">Misturado</option>
          </select>

          <label>Nível de pH do Solo:</label>
          <select value={nivelPh} onChange={e => setNivelPh(e.target.value as PH)}>
            <option value="">Selecione</option>
            <option value="ácido">Ácido</option>
            <option value="neutro">Neutro</option>
            <option value="alcalino">Alcalino</option>
          </select>

          <label>Nível de Insolação:</label>
          <select value={insolacao} onChange={e => setInsolacao(e.target.value as Insolacao)}>
            <option value="">Selecione</option>
            <option value="baixa">Baixa</option>
            <option value="média">Média</option>
            <option value="alta">Alta</option>
          </select>

          <label>O que você gostaria de plantar? (opcional)</label>
          <input
            type="text"
            value={desejo}
            onChange={e => setDesejo(e.target.value)}
            placeholder="Ex: Alface, Tomates..."
          />

          <button onClick={analisar}>Analisar possibilidades de plantio</button>
        </div>
      ) : (
        <div className={styles.resultBox}>
          <h1>Sugestões de Plantio para Seu Solo</h1>
          <p>Baseado nas informações inseridas:</p>

          <ul>
            {resultado.map((r, idx) => (
              <li key={idx} className={styles.item}>
                <span>{r.nome}</span>
                <span>{r.compatibilidade}%</span>
              </li>
            ))}
          </ul>

          <button onClick={resetar}>Voltar</button>
        </div>
      )}
    </div>
  );
}
