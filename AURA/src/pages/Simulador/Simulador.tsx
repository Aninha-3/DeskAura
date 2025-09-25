import { useState } from "react";
import styles from "./Simulador.module.css";

// Ícones do React
import { 
  FaSeedling, 
  FaSun, 
  FaTint, 
  FaChartBar, 
  FaArrowLeft,
  FaLeaf,
  FaRecycle,
  FaTree
} from "react-icons/fa";

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

  // Função para obter ícone baseado na compatibilidade
  const getCompatibilidadeIcon = (compatibilidade: number) => {
    if (compatibilidade >= 80) return <FaSeedling className={styles.iconHigh} />;
    if (compatibilidade >= 60) return <FaLeaf className={styles.iconMedium} />;
    return <FaTree className={styles.iconLow} />;
  };

  // Função para obter cor da barra de progresso
  const getProgressColor = (compatibilidade: number) => {
    if (compatibilidade >= 80) return "#2E8B57";
    if (compatibilidade >= 60) return "#58A975";
    return "#FF6B6B";
  };

  return (
    <div className={styles.container}>
      {!resultado ? (
        <div className={styles.formBox}>
          <div className={styles.header}>
            <FaSeedling className={styles.titleIcon} />
            <h1>Simulador de Plantio Inteligente</h1>
          </div>
          <p className={styles.subtitle}>
            Descubra o que plantar em seu tipo de terra e receba orientações personalizadas
          </p>

          <div className={styles.formGroup}>
            <label>
              <FaTint className={styles.inputIcon} />
              Tipo de solo:
            </label>
            <select value={tipoSolo} onChange={e => setTipoSolo(e.target.value as Solo)}>
              <option value="">Selecione o tipo de solo</option>
              <option value="arenoso">Arenoso</option>
              <option value="argiloso">Argiloso</option>
              <option value="misturado">Misturado</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>
              <FaChartBar className={styles.inputIcon} />
              Nível de pH do Solo:
            </label>
            <select value={nivelPh} onChange={e => setNivelPh(e.target.value as PH)}>
              <option value="">Selecione o nível de pH</option>
              <option value="ácido">Ácido</option>
              <option value="neutro">Neutro</option>
              <option value="alcalino">Alcalino</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>
              <FaSun className={styles.inputIcon} />
              Nível de Insolação:
            </label>
            <select value={insolacao} onChange={e => setInsolacao(e.target.value as Insolacao)}>
              <option value="">Selecione a insolação</option>
              <option value="baixa">Baixa</option>
              <option value="média">Média</option>
              <option value="alta">Alta</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>
              <FaLeaf className={styles.inputIcon} />
              O que você gostaria de plantar? (opcional)
            </label>
            <input
              type="text"
              value={desejo}
              onChange={e => setDesejo(e.target.value)}
              placeholder="Ex: Alface, Tomates..."
            />
          </div>

          <button onClick={analisar} className={styles.analyzeButton}>
            <FaSeedling className={styles.buttonIcon} />
            Analisar possibilidades de plantio
          </button>
        </div>
      ) : (
        <div className={styles.resultBox}>
          <div className={styles.header}>
            <FaChartBar className={styles.titleIcon} />
            <h1>Sugestões de Plantio para Seu Solo</h1>
          </div>
          <p className={styles.subtitle}>Baseado nas informações inseridas:</p>

          <div className={styles.resultsList}>
            {resultado.map((r, idx) => (
              <div key={idx} className={styles.resultItem}>
                <div className={styles.itemHeader}>
                  {getCompatibilidadeIcon(r.compatibilidade)}
                  <span className={styles.plantName}>{r.nome}</span>
                  <span className={styles.compatibility}>
                    {r.compatibilidade}%
                  </span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{
                      width: `${r.compatibilidade}%`,
                      backgroundColor: getProgressColor(r.compatibilidade)
                    }}
                  ></div>
                </div>
                <div className={styles.plantDetails}>
                  <span><FaTint /> Solo: {r.terra}</span>
                  <span><FaChartBar /> pH: {r.ph}</span>
                  <span><FaSun /> Insolação: {r.insolacao}</span>
                </div>
              </div>
            ))}
          </div>

          <button onClick={resetar} className={styles.backButton}>
            <FaArrowLeft className={styles.buttonIcon} />
            Voltar
          </button>
        </div>
      )}
    </div>
  );
}