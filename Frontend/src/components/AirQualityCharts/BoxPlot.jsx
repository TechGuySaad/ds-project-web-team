import Plot from "react-plotly.js";

function BoxPlot({ data, title }) {
  // Use a different variable name for the data passed to Plotly
  const plotData = [
    {
      y: data, // Use the data passed as props
      type: "box",
      name: "PM 2.5 Levels",
      marker: { color: "rgb(31, 119, 180)" },
    },
  ];

  const layout = {
    title: title || "PM 2.5 Levels", // Dynamic title
    xaxis: { title: "City" },
    yaxis: { title: "PM 2.5 Count" },
    paper_bgcolor: "#0a192f",
    plot_bgcolor: "#0a192f",
    font: { color: "white" },
  };

  return (
    <div className="bg-[#0f2744] h-full border border-[#1e3a5f] p-6">
      <Plot
        data={plotData} // Use the renamed variable here
        layout={layout}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default BoxPlot;
