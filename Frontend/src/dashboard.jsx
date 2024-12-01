import { useState, useEffect } from "react";
import AirQuality from "./components/AirQuality";
import TemperatureTrend from "./components/TemperatureTrend";
import EnergyConsumption from "./components/EnergyConsumption";
import TrafficFlow from "./components/TrafficFlow";
import PollutionHotspot from "./components/PollutionHotspot";
import Weather from "./components/Weather";
import NoiseLevel from "./components/NoiseLevel";
import HumidityLevel from "./components/HumidityLevel";

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-CA"); // Format: YYYY/MM/DD
  const formattedTime = currentTime.toLocaleTimeString(); // Format: HH:MM:SS
  const formattedDay = currentTime.toLocaleDateString("en-US", {
    weekday: "short",
  }); // Format: Mon, Tue, etc.

  return (
    <div className="min-h-screen w-full bg-[#0a192f] text-white">
      {/* Header */}
      <header className="p-4 border-b border-[#1e3a5f]">
        <div className="flex justify-between items-center mx-auto">
          <div className="flex items-center gap-4">
            <span>{formattedDate}</span>
            <span>{formattedDay}</span>
            <span>{formattedTime}</span>
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
        <div className="col-span-3 grid grid-cols-1 gap-6">
          <AirQuality />
          <TemperatureTrend />
          <EnergyConsumption />
          <TrafficFlow />
          <PollutionHotspot />
          <Weather />
          <NoiseLevel />
          <HumidityLevel />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
