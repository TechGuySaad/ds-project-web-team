import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-CA");
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDay = currentTime.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const handleNavigation = (path) => {
    navigate(path);
  };

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
      <div className="h-full w-full px-6 py-6 flex justify-center">
        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6">
          <div
            className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6 cursor-pointer w-96"
            onClick={() => handleNavigation("/air-quality")}
          >
            <h2 className="text-center text-lg font-bold">Air Quality</h2>
          </div>
          <div
            className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6 cursor-pointer"
            onClick={() => handleNavigation("/temperature-trend")}
          >
            <h2 className="text-center text-lg font-bold">Weather</h2>
          </div>
          <div
            className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6 cursor-pointer"
            onClick={() => handleNavigation("/energy-consumption")}
          >
            <h2 className="text-center text-lg font-bold">
              Energy Consumption
            </h2>
          </div>
          <div
            className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6 cursor-pointer"
            onClick={() => handleNavigation("/traffic-flow")}
          >
            <h2 className="text-center text-lg font-bold">Traffic Flow</h2>
          </div>
          <div
            className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6 cursor-pointer"
            onClick={() => handleNavigation("/pollution-hotspot")}
          >
            <h2 className="text-center text-lg font-bold">Pollution Hotspot</h2>
          </div>
          <div
            className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6 cursor-pointer"
            onClick={() => handleNavigation("/weather")}
          >
            <h2 className="text-center text-lg font-bold">Weather</h2>
          </div>
          <div
            className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6 cursor-pointer"
            onClick={() => handleNavigation("/noise-level")}
          >
            <h2 className="text-center text-lg font-bold">Noise Level</h2>
          </div>
          <div
            className="bg-[#0f2744] h-48 border border-[#1e3a5f] p-6 cursor-pointer"
            onClick={() => handleNavigation("/humidity-level")}
          >
            <h2 className="text-center text-lg font-bold">Humidity Level</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
