import Plot from "react-plotly.js";

function BoxPlot() {
  const data = [
    {
      y: [200, 150, 300, 250, 400, 100, 350], // Data for Lahore
      type: "box",
      name: "Lahore",
      marker: { color: "rgb(31, 119, 180)" },
    },
  ];

  const layout = {
    title: "PM 2.5 Levels in Lahore",
    xaxis: { title: "City" },
    yaxis: { title: "PM 2.5 Count" },
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

export default BoxPlot;
