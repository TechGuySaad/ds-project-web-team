import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function EnergyConsumptionHistogram({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Frequency",
        data: data.values,
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Distribution of Energy Consumption",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Energy Consumption (kWh)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Frequency",
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

export default EnergyConsumptionHistogram;
