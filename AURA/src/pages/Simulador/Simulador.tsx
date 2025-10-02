import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from "./Simulador.module.css";
import FormSimulador from '../../components/FormSimulador';
import ResultadoSimulador from '../../components/ResultadoSimulador';

// Registrando componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
      {
        nome: "Feijão",
        terra: "argiloso",
        ph: "levemente ácido",
        insolacao: "alta",
        compatibilidade: 80,
      },
      {
        nome: "Batata",
        terra: "arenoso",
        ph: "ácido",
        insolacao: "média",
        compatibilidade: 70,
      },
      {
        nome: "Couve",
        terra: "argiloso",
        ph: "neutro",
        insolacao: "alta",
        compatibilidade: 90,
      }
    ];

    const chart = {
      labels: suggestions.map((s) => s.nome),
      datasets: [
        {
          label: "Compatibilidade (%)",
          data: suggestions.map((s) => s.compatibilidade),
          backgroundColor: '#077354',
          borderColor: '#365040ff',
          borderWidth: 1,
          borderRadius: 8,
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

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: { size: 14, family: 'Segoe UI' }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        bodyFont: { family: 'Segoe UI' },
        titleFont: { family: 'Segoe UI' }
      },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          },
          font: { family: 'Segoe UI' }
        },
        grid: { color: '#e0e0e0', borderColor: '#e0e0e0' }
      },
      x: {
        ticks: { font: { family: 'Segoe UI' } },
        grid: { display: false }
      }
    },
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Simulador de Plantio Inteligente</h1>
        <p className={styles.subtitle}>
          {!resultado.length 
            ? "Descubra o que plantar em seu tipo de terra e receba orientações personalizadas"
            : "Descubra o que plantar em seu tipo de terra e receba orientações personalizadas"
          }
        </p>
      </header>

      {!resultado.length ? (
        <FormSimulador setResultado={gerarSugestoes} />
      ) : (
        <div className={styles.resultsContainer}>
          <ResultadoSimulador resultado={resultado} resetar={resetar} />
          
          {chartData && (
            <div className={styles.chartContainer}>
              <h3 className={styles.chartTitle}>Compatibilidade das Culturas</h3>
              <div style={{ height: '400px' }}>
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
          )}

          <div className={styles.soilPreparation}>
            <h3 className={styles.soilPreparationTitle}>Data de Preparação para o Solo</h3>
            <p className={styles.soilPreparationDate}>
              {new Date().toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
