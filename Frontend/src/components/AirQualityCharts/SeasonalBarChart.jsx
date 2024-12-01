import Plot from "react-plotly.js";

function LahoreSeasonalBarChart() {
  // Seasons and PM 2.5 data for Lahore
  const seasons = ["Autumn", "Spring", "Summer", "Winter"];
  const lahoreData = [220, 150, 170, 250]; // Average PM 2.5 counts for each season

  const data = [
    {
      x: seasons,
      y: lahoreData,
      type: "bar",
      name: "Lahore",
      marker: { color: "rgb(31, 119, 180)" },
    },
  ];

  const layout = {
    title: "Seasonal Trends of PM 2.5 Levels in Lahore",
    xaxis: { title: "Season" },
    yaxis: { title: "Average PM 2.5 Count" },
    paper_bgcolor: "#0a192f",
    plot_bgcolor: "#0a192f",
    font: { color: "white" },
  };

  return (
    <div className="bg-[#0f2744] h-full border border-[#1e3a5f] p-6">
      <Plot
        data={data}
        layout={layout}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default LahoreSeasonalBarChart;
