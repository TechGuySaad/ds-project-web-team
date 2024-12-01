import { Line } from "react-chartjs-2";

const airQualityData = {
  labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
  datasets: [
    {
      label: "Air Quality Index",
      data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 800)),
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    },
  ],
};

const airQualityOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { grid: { display: false }, ticks: { display: false } },
    y: {
      grid: { color: "rgba(255, 255, 255, 0.1)" },
      ticks: { display: false },
    },
  },
  interaction: { mode: "none" },
  animations: { duration: 0 },
};

function AirQuality() {
  return (
    <div className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6 w-full">
      <h2 className="text-center text-lg font-bold mb-4">Air Quality</h2>
      <div className="w-full h-[calc(100%-2rem)]">
        <Line
          data={airQualityData}
          options={{ ...airQualityOptions, maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}

export default AirQuality;
