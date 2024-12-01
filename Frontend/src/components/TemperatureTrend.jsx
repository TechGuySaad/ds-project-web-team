import { Line } from "react-chartjs-2";

const temperatureData = {
  labels: ["Karachi", "Lahore", "Peshawar", "Islamabad", "Quetta"],
  datasets: [
    {
      label: "Temperature (°C)",
      data: [20, 25, 24, 22, 18],
      backgroundColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 0,
    },
  ],
};

const temperatureOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { grid: { display: false }, ticks: { color: "white" } },
    y: {
      grid: { color: "rgba(255, 255, 255, 0.1)" },
      ticks: { color: "white", stepSize: 5 },
    },
  },
  interaction: { mode: "none" },
  animations: { duration: 0 },
};

function TemperatureTrend() {
  return (
    <div className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6">
      <h2 className="text-center text-lg font-bold mb-4">Temperature Trends</h2>
      <div className="w-full h-[calc(100%-2rem)]">
        <Line
          data={temperatureData}
          options={{ ...temperatureOptions, maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}

export default TemperatureTrend;
