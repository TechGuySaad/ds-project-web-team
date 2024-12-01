import Plot from "react-plotly.js";

function Histogram({ data, title }) {
  // Fallback in case no data is provided (e.g., while loading)
  if (!data) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const histogramData = [
    {
      x: data, // Dynamic data passed as a prop
      type: "histogram",
      name: "PM 2.5 Levels",
      marker: { color: "rgba(148, 0, 211, 0.7)" }, // Purple
    },
  ];

  const kdeData = [
    {
      x: data, // Same data for KDE
      type: "scatter",
      mode: "lines",
      line: { shape: "spline", color: "purple" },
      name: "KDE",
    },
  ];

  const layout = {
    title: title || "Distribution of PM 2.5 Levels", // Dynamic title
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
