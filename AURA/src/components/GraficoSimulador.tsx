import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
  data: any[];
}

export default function GraficoSimulador({ data }: Props) {
  const labels = data.map(d => d.nome);
  const valores = data.map(d => d.compatibilidade);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Compatibilidade (%)",
        data: valores,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Compatibilidade das Plantas" },
    },
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  };

  return <Bar data={chartData} options={options} />;
}
