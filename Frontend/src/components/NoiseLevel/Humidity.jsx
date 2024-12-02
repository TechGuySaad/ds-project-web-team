import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Humidity = ({ data }) => {
  // Check if data exists and is not empty
  if (!data || data.length === 0) {
    return <div>No data available for the selected city</div>;
  }

  // Extract labels (City names) and humidity values from the data
  const labels = data.map((item) => item.City);
  const humidityData = data.map((item) => item.Humidity);

  // Chart.js dataset configuration
  const chartData = {
    labels,
    datasets: [
      {
        label: "Humidity (%)",
        data: humidityData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Humidity Levels in Major Cities" },
    },
    scales: {
      y: {
        title: { display: true, text: "Humidity (%)" },
        beginAtZero: true,
      },
      x: { title: { display: true, text: "City" } },
    },
  };

  // Render Bar chart
  return <Bar data={chartData} options={options} />;
};

export default Humidity;
