import Plot from "react-plotly.js";

function CityTimeSeries({ city, dates, temperatures }) {
  if (!city || !dates || !temperatures) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const plotData = [
    {
      x: dates, // Date values for the x-axis
      y: temperatures, // Temperature values for the y-axis
      type: "scatter",
      mode: "lines+markers",
      name: city, // Legend name for the city
      line: { color: "rgb(31, 119, 180)", width: 2 },
      marker: { size: 6 },
    },
  ];

  const layout = {
    title: `Temperature Trends in ${city}`, // Dynamic title for the city
    xaxis: { title: "Date", showgrid: true, zeroline: false },
    yaxis: { title: "Temperature (°C)", showline: true },
    paper_bgcolor: "#0a192f",
    plot_bgcolor: "#0a192f",
    font: { color: "white" },
    showlegend: true,
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

export default CityTimeSeries;
