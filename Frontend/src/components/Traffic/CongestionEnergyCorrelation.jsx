import React from "react";
import { Scatter } from "react-chartjs-2";

function CongestionEnergyCorrelation({ data }) {
  const chartData = {
    datasets: [
      {
        label: "Correlation Between Congestion and Energy Consumption",
        data: data,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "red",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Correlation Between Congestion Level and Energy Consumption",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Congestion Level",
        },
      },
      y: {
        title: {
          display: true,
          text: "Energy Consumption (kWh)",
        },
      },
    },
  };

  return <Scatter data={chartData} options={options} />;
}

export default CongestionEnergyCorrelation;
