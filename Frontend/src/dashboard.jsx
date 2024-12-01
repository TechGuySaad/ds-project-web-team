import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const airQualityData = {
  labels: Array.from({ length: 24 }, (_, i) => `${i}:00`), // Dummy hours for X-axis
  datasets: [
    {
      label: "Air Quality Index",
      data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 800)), // Dummy data
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    },
  ],
};

const airQualityOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hides the legend
    },
    tooltip: {
      enabled: false, // Disables tooltips
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false, // Hides x-axis labels
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        display: false, // Hides y-axis labels
      },
    },
  },
  interaction: {
    mode: "none", // Disables any interaction modes
  },
  animations: {
    duration: 0, // Disables animations
  },
};

const temperatureData = {
  labels: ["Karachi", "Lahore", "Peshawar", "Islamabad", "Quetta"], // City names
  datasets: [
    {
      label: "Temperature (°C)",
      data: [20, 25, 24, 22, 18], // Dummy data for temperature
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
    legend: {
      display: false, // Hides the legend
    },
    tooltip: {
      enabled: false, // Disables tooltips
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Removes gridlines for x-axis
      },
      ticks: {
        color: "white", // X-axis labels color
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)", // Y-axis gridline color
      },
      ticks: {
        color: "white", // Y-axis labels color
        stepSize: 5, // Step size for y-axis
      },
    },
  },
  interaction: {
    mode: "none", // Disables interactivity
  },
  animations: {
    duration: 0, // Disables animations
  },
};

function Dashboard() {
  return (
    <div className="min-h-screen w-fit bg-[#0a192f] text-white">
      {/* Header */}
      <header className="p-4 border-b border-[#1e3a5f]">
        <div className="flex justify-between items-center mx-auto">
          <div className="flex items-center gap-4">
            <span>2024/12/02</span>
            <span>Mon</span>
            <span>20:01:22</span>
          </div>
          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2">
            Smart City Environment Monitoring System
          </h1>
          <div className="flex items-center gap-2">
            <span>Cloudy</span>
            <span>67F-71F</span>
            <a href="/" className="ml-2">
              <span className="h-4 w-4">🏠</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="h-full w-full px-6 py-6 grid grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1 space-y-6">
          {/* Location */}
          <div className="bg-[#0f2744] p-4 border border-[#1e3a5f]">
            <h2 className="text-lg font-bold">Location</h2>
            <ul className="space-y-2 mt-4">
              {["Islamabad", "Karachi", "Lahore", "Peshawar", "Quetta"].map(
                (city) => (
                  <li key={city}>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="location" />
                      {city}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Charts Section */}
        <div className="col-span-3 grid grid-cols-2 gap-6">
          <div className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6">
            <h2 className="text-center text-lg font-bold mb-4">Air Quality</h2>
            <div className="w-full h-[calc(100%-2rem)]">
              <Line
                data={airQualityData}
                options={{
                  ...airQualityOptions,
                  maintainAspectRatio: false, // Ensures the chart adapts dynamically
                  responsive: true, // Keeps the chart responsive
                }}
              />
            </div>
          </div>

          <div className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6">
            <h2 className="text-center text-lg font-bold mb-4">
              Temperature Trends
            </h2>
            <div className="w-full h-[calc(100%-1rem)]">
              <Line
                data={temperatureData}
                options={{
                  ...temperatureOptions,
                  maintainAspectRatio: false, // Ensures the chart fits dynamically
                  responsive: true, // Ensures responsiveness
                }}
              />
            </div>
          </div>

          <div className="bg-[#0f2744] h-48 border border-[#1e3a5f]">
            <h2 className="text-center text-lg font-bold p-4">
              Energy Consumption Analysis
            </h2>
          </div>
          <div className="bg-[#0f2744] h-48 border border-[#1e3a5f]">
            <h2 className="text-center text-lg font-bold p-4">
              Traffic Flow Analysis
            </h2>
          </div>
          <div className="bg-[#0f2744] h-48 border border-[#1e3a5f]">
            <h2 className="text-center text-lg font-bold p-4">
              Pollution Hotspots
            </h2>
          </div>
          <div className="bg-[#0f2744] h-48 border border-[#1e3a5f]">
            <h2 className="text-center text-lg font-bold p-4">
              Weather Conditions
            </h2>
          </div>
          <div className="bg-[#0f2744] h-48 border border-[#1e3a5f]">
            <h2 className="text-center text-lg font-bold p-4">Noise Levels</h2>
          </div>
          <div className="bg-[#0f2744] h-48 border border-[#1e3a5f]">
            <h2 className="text-center text-lg font-bold p-4">
              Humidity Levels
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
