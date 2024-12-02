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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  console.log(data);
  if (!data || data.length === 0) {
    return <div>Loading chart data...</div>; // Display a loading message if data is not yet available
  }

  // Extract the labels (months) and data (congestion levels)
  const labels = data.map((item) => item.month);
  const congestionData = data.map((item) => item.congestion_level);

  // Chart.js dataset configuration
  const chartData = {
    labels,
    datasets: [
      {
        label: "Average Congestion Level",
        data: congestionData,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Monthly Average Congestion Levels`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Congestion Level",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
