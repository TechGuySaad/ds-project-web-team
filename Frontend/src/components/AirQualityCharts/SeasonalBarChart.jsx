import Plot from "react-plotly.js";

function SeasonalBarChart({ data, title }) {
  if (!data || !data.seasons || !data.averages) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const chartData = [
    {
      x: data.seasons, // Dynamic seasons
      y: data.averages, // Dynamic averages
      type: "bar",
      name: "PM 2.5 Levels",
      marker: { color: "rgb(31, 119, 180)" },
    },
  ];

  const layout = {
    title: title || "Seasonal Trends of PM 2.5 Levels", // Dynamic title
    xaxis: { title: "Season" },
    yaxis: { title: "Average PM 2.5 Count" },
    paper_bgcolor: "#0a192f",
    plot_bgcolor: "#0a192f",
    font: { color: "white" },
  };

  return (
    <div className="bg-[#0f2744] h-full border border-[#1e3a5f] p-6">
      <Plot
        data={chartData}
        layout={layout}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default SeasonalBarChart;
