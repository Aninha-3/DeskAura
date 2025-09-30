import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import FormSimulador from "../../components/FormSimulador";
import ResultadoSimulador from "../../components/ResultadoSimulador";
import styles from "./Simulador.module.css";

export default function Simulador() {
  const [resultado, setResultado] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any>(null);

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

  function resetar() {
    setResultado([]);
    setChartData(null);
  }

  return (
    <div className={styles.container}>
      {!resultado.length ? (
        <FormSimulador setResultado={gerarSugestoes} />
      ) : (
        <div>
          <ResultadoSimulador resultado={resultado} resetar={resetar} />
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
