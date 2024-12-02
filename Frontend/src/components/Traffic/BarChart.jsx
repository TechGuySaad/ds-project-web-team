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

const BarChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available for the selected city</div>; // Show a fallback if data is empty
  }

  // Extract labels (city names) and data (average congestion levels)
  const labels = data.map((item) => item.location);
  const congestionData = data.map((item) => item.avg_congestion);

  // Chart.js dataset configuration
  const chartData = {
    labels,
    datasets: [
      {
        label: "Average Congestion Level",
        data: congestionData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Average Congestion Level by City",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "City",
        },
      },
      y: {
        title: {
          display: true,
          text: "Congestion Level",
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
