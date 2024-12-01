import Plot from "react-plotly.js";

function Histogram() {
  // Sample PM 2.5 data for Lahore
  const lahoreData = [
    150, 160, 120, 140, 180, 200, 220, 240, 180, 190, 200, 210, 250, 270, 300,
    200, 180, 190, 170, 160, 150, 190, 200, 210, 220, 300, 290, 280, 260,
  ];

  const histogramData = [
    {
      x: lahoreData,
      type: "histogram",
      name: "PM 2.5 Levels",
      marker: { color: "rgba(148, 0, 211, 0.7)" }, // Purple
    },
  ];

  const kdeData = [
    {
      x: lahoreData,
      type: "scatter",
      mode: "lines",
      line: { shape: "spline", color: "purple" },
      name: "KDE",
    },
  ];

  const layout = {
    title: "Distribution of PM 2.5 Levels in Lahore",
    xaxis: { title: "PM 2.5 Count" },
    yaxis: { title: "Frequency" },
    paper_bgcolor: "#0a192f",
    plot_bgcolor: "#0a192f",
    font: { color: "white" },
  };

  return (
    <div className="bg-[#0f2744] h-full border border-[#1e3a5f] p-6">
      <Plot
        data={[...histogramData, ...kdeData]}
        layout={layout}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default Histogram;
