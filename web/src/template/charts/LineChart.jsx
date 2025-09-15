import * as React from 'react';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement,
  Tooltip, Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const DEFAULT_LABELS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

export default function LineChart({
  labels = DEFAULT_LABELS,
  data = [],
  datasetLabel = 'Total de denúncias por mês',
  height = 300,
  options,
  style,
}) {
  const chartData = React.useMemo(() => ({
    labels,
    datasets: [
      {
        label: datasetLabel,
        data,
        fill: false,
        tension: 0.25,
      },
    ],
  }), [labels, data, datasetLabel]);

  const chartOptions = React.useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true }, tooltip: { mode: 'index', intersect: false } },
    interaction: { mode: 'nearest', axis: 'x', intersect: false },
    scales: { y: { beginAtZero: true } },
    ...options,
  }), [options]);

  return (
    <div style={{ position: 'relative', height, ...style }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
