import Plot from "react-plotly.js";

function SeasonalTrends({ data, title }) {
  if (!data || !data.months || !data.averages) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const plotData = [
    {
      x: data.months, // Dynamic months
      y: data.averages, // Dynamic averages
      type: "scatter",
      mode: "lines+markers",
      name: "Seasonal Trends",
      line: { color: "rgb(31, 119, 180)", width: 2 },
      marker: { size: 6 },
    },
  ];

  const layout = {
    title: title || "Seasonal Trends of PM 2.5 Levels", // Dynamic title
    xaxis: { title: "Month" },
    yaxis: { title: "Average PM 2.5 Count" },
    paper_bgcolor: "#0a192f",
    plot_bgcolor: "#0a192f",
    font: { color: "white" },
  };

  return (
    <div className="bg-[#0f2744] h-full border border-[#1e3a5f] p-6">
      <Plot
        data={plotData}
        layout={layout}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default SeasonalTrends;
