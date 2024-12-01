import Plot from "react-plotly.js";

function BarChart({ city, temperature }) {
  // Fallback if no data is provided
  if (!city || !temperature) {
    return <p className="text-center text-white">Loading...</p>;
  }

  // Data for the bar chart
  const chartData = [
    {
      x: [city], // Single city
      y: [temperature], // Corresponding temperature
      type: "bar",
      marker: { color: "rgb(31, 119, 180)" }, // Bar color
    },
  ];

  // Layout for the chart
  const layout = {
    title: `Average Temperature in ${city}`,
    xaxis: { title: "City" },
    yaxis: { title: "Average Temperature (°C)" },
    paper_bgcolor: "#0a192f", // Background color
    plot_bgcolor: "#0a192f", // Plot area color
    font: { color: "white" }, // Text color
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

export default BarChart;
