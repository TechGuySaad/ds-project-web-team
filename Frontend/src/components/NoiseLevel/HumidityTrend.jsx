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

const HumidityTrendChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const labels = data.map((item) => item.time);
  const humidityTrendData = data.map((item) => item.humidity);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Humidity (%)",
        data: humidityTrendData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Humidity Level Trend" },
    },
    scales: {
      y: { title: { display: true, text: "Humidity (%)" }, beginAtZero: true },
      x: { title: { display: true, text: "Time" } },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default HumidityTrendChart;
