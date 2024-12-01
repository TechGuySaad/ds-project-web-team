import React from "react";
import Plot from "react-plotly.js";

function WindSpeedTrends({ dates, windSpeed }) {
  if (!dates || !windSpeed) {
    return (
      <p className="text-center text-white">Loading Wind Speed Trends...</p>
    );
  }

  return (
    <Plot
      data={[
        {
          x: dates,
          y: windSpeed,
          type: "scatter",
          mode: "lines+markers",
          name: "Wind Speed",
          line: { color: "orange", width: 2 },
        },
      ]}
      layout={{
        title: `Wind Speed Trends`,
        xaxis: { title: "Date" },
        yaxis: { title: "Wind Speed (km/h)" },
        paper_bgcolor: "#0a192f",
        plot_bgcolor: "#0a192f",
        font: { color: "white" },
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default WindSpeedTrends;
