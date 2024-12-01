import Plot from "react-plotly.js";

function TimeSeries({ data, title }) {
  // Fallback in case no data is provided (e.g., while loading)
  if (!data || !data.dates || !data.counts) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const plotData = [
    {
      x: data.dates, // Dynamic dates from data
      y: data.counts, // Dynamic counts from data
      type: "scatter",
      mode: "lines+markers",
      name: "PM 2.5 Levels",
      line: { color: "blue" },
      marker: { color: "blue" },
    },
  ];

  const layout = {
    title: title || "Time Series of PM 2.5 Levels", // Dynamic title
    xaxis: { title: "Date" },
    yaxis: { title: "PM 2.5 Count" },
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

export default TimeSeries;
