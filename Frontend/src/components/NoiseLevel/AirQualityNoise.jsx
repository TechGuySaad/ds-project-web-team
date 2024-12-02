import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AirQuality = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const labels = data.map((item) => item.Time);
  const noiseLevels = data.map((item) => item.NoiseLevel);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Noise Level (dB)",
        data: noiseLevels,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Noise Levels Over Time" },
    },
    scales: {
      y: {
        title: { display: true, text: "Noise Level (dB)" },
        beginAtZero: true,
      },
      x: { title: { display: true, text: "Time" } },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default AirQuality;
