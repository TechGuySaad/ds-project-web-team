import Plot from "react-plotly.js";

function TimeSeries() {
  // Sample data for Lahore
  const data = [
    {
      x: [
        "2019-05-01",
        "2019-06-01",
        "2019-07-01",
        "2019-08-01",
        "2019-09-01",
        "2019-10-01",
        "2019-11-01",
        "2019-12-01",
        "2020-01-01",
        "2020-02-01",
        "2020-03-01",
        "2020-04-01",
      ], // Dates
      y: [150, 180, 120, 200, 230, 300, 350, 400, 250, 220, 190, 170], // PM 2.5 levels
      type: "scatter",
      mode: "lines+markers",
      name: "Lahore",
      line: { color: "blue" },
      marker: { color: "blue" },
    },
  ];

  const layout = {
    title: "Time Series of PM 2.5 Levels in Lahore",
    xaxis: { title: "Date" },
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

export default TimeSeries;
