import React from "react";
import Plot from "react-plotly.js";

function AirPressureTrends({ dates, airPressure }) {
  if (!dates || !airPressure) {
    return (
      <p className="text-center text-white">Loading Air Pressure Trends...</p>
    );
  }

  return (
    <Plot
      data={[
        {
          x: dates,
          y: airPressure,
          type: "scatter",
          mode: "lines+markers",
          name: "Air Pressure",
          line: { color: "purple", width: 2 },
        },
      ]}
      layout={{
        title: `Air Pressure Trends`,
        xaxis: { title: "Date" },
        yaxis: { title: "Air Pressure (hPa)" },
        paper_bgcolor: "#0a192f",
        plot_bgcolor: "#0a192f",
        font: { color: "white" },
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default AirPressureTrends;
