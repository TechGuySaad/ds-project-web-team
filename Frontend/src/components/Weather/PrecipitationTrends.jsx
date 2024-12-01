import React from "react";
import Plot from "react-plotly.js";

function PrecipitationTrends({ dates, precipitation }) {
  if (!dates || !precipitation) {
    return (
      <p className="text-center text-white">Loading Precipitation Trends...</p>
    );
  }

  return (
    <Plot
      data={[
        {
          x: dates,
          y: precipitation,
          type: "scatter",
          mode: "lines+markers",
          name: "Precipitation",
          line: { color: "blue", width: 2 },
        },
      ]}
      layout={{
        title: `Precipitation Trends`,
        xaxis: { title: "Date" },
        yaxis: { title: "Precipitation (mm)" },
        paper_bgcolor: "#0a192f",
        plot_bgcolor: "#0a192f",
        font: { color: "white" },
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default PrecipitationTrends;
