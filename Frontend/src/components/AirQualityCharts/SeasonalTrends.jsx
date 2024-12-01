import Plot from "react-plotly.js";

function SeasonalTrends() {
  // Sample monthly average PM 2.5 data for Lahore
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const lahoreData = [
    250, 200, 150, 100, 130, 170, 120, 140, 180, 220, 270, 300,
  ];

  const data = [
    {
      x: months,
      y: lahoreData,
      type: "scatter",
      mode: "lines+markers",
      name: "Lahore",
      line: { color: "rgb(31, 119, 180)", width: 2 },
      marker: { size: 6 },
    },
  ];

  const layout = {
    title: "Seasonal Trends of PM 2.5 Levels in Lahore",
    xaxis: { title: "Month" },
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

export default SeasonalTrends;
