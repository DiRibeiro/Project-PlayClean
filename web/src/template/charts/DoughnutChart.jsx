import * as React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({
  labels = [],
  data = [],
  height = 300,
  title,
  options,
  style,
}) {
  const chartData = React.useMemo(() => ({
    labels,
    datasets: [{ data }],
  }), [labels, data]);

  const chartOptions = React.useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'bottom' },
      title: title ? { display: true, text: title } : undefined,
    },
    ...options,
  }), [options, title]);

  return (
    <div style={{ position: 'relative', height, ...style }}>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
}
