import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import FormSimulador from "../../components/FormSimulador";
import ResultadoSimulador from "../../components/ResultadoSimulador";
import styles from "./Simulador.module.css";

// Ícones do React
import {
  FaSeedling,
  FaLeaf,
  FaTree,
} from "react-icons/fa";

export default function Simulador() {
  const [resultado, setResultado] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any>(null);

  /** Gera sugestões de plantio e dados para o gráfico */
  function gerarSugestoes(data: any) {
    const suggestions = [
      {
        nome: data.desejo || "Alface",
        terra: data.tipoSolo || "arenoso",
        ph: data.nivelPh || "neutro",
        insolacao: data.insolacao || "alta",
        compatibilidade: Math.floor(Math.random() * 41) + 60,
      },
      {
        nome: "Tomate",
        terra: "argiloso",
        ph: "neutro",
        insolacao: "alta",
        compatibilidade: 85,
      },
      {
        nome: "Cenoura",
        terra: "arenoso",
        ph: "neutro",
        insolacao: "média",
        compatibilidade: 75,
      },
    ];

    const chart = {
      labels: suggestions.map((s) => s.nome),
      datasets: [
        {
          label: "Compatibilidade (%)",
          data: suggestions.map((s) => s.compatibilidade),
          backgroundColor: "#58A975",
        },
      ],
    };

    setResultado(suggestions);
    setChartData(chart);
  }

  /** Reseta os resultados */
  function resetar() {
    setResultado([]);
    setChartData(null);
  }

  /** Retorna ícone baseado na compatibilidade */
  const getCompatibilidadeIcon = (compatibilidade: number) => {
    if (compatibilidade >= 80)
      return <FaSeedling className={styles.iconHigh} />;
    if (compatibilidade >= 60)
      return <FaLeaf className={styles.iconMedium} />;
    return <FaTree className={styles.iconLow} />;
  };

  /** Retorna a cor da barra de progresso */
  const getProgressColor = (compatibilidade: number) => {
    if (compatibilidade >= 80) return "#2E8B57";
    if (compatibilidade >= 60) return "#58A975";
    return "#FF6B6B";
  };

  return (
    <div className={styles.container}>
      {!resultado.length ? (
        // Tela de formulário
        <FormSimulador setResultado={gerarSugestoes} />
      ) : (
        // Tela de resultados
        <div>
          <ResultadoSimulador
            resultado={resultado}
            resetar={resetar}
            getCompatibilidadeIcon={getCompatibilidadeIcon}
            getProgressColor={getProgressColor}
          />

          {chartData && (
            <div style={{ width: 600, height: 400, marginTop: 20 }}>
              <Bar data={chartData} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
