import { useState, useEffect } from "react";
import Humidity from "./NoiseLevel/Humidity";

function NoiseLevel() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("Lahore"); // Default city
  const [humidityData, setHumidityData] = useState([]); // Data for Humidity component

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Define dummy data for cities
    const cityDummyData = {
      Islamabad: [
        { City: "Islamabad", Humidity: 72 },
        // { City: "Rawalpindi", Humidity: 68 },
        // { City: "Murree", Humidity: 80 },
      ],
      Karachi: [
        { City: "Karachi", Humidity: 82 },
        // { City: "Hyderabad", Humidity: 76 },
        // { City: "Thatta", Humidity: 78 },
      ],
      Lahore: [
        { City: "Lahore", Humidity: 65 },
        // { City: "Sheikhupura", Humidity: 60 },
        // { City: "Kasur", Humidity: 62 },
      ],
      Peshawar: [
        { City: "Peshawar", Humidity: 55 },
        // { City: "Mardan", Humidity: 58 },
        // { City: "Kohat", Humidity: 57 },
      ],
      Quetta: [
        { City: "Quetta", Humidity: 45 },
        // { City: "Zhob", Humidity: 42 },
        // { City: "Chaman", Humidity: 48 },
      ],
    };

    // Set humidity data for the selected city
    setHumidityData(cityDummyData[selectedCity]);
  }, [selectedCity]);

  const formattedDate = currentTime.toLocaleDateString("en-CA");
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDay = currentTime.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const handleCityChange = (city) => {
    setSelectedCity(city);
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
      <div className="h-full w-full px-6 py-6 grid grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1 space-y-6">
          <div className="bg-[#0f2744] p-4 border border-[#1e3a5f]">
            <h2 className="text-lg font-bold">Location</h2>
            <ul className="space-y-2 mt-4">
              {["Islamabad", "Karachi", "Lahore", "Peshawar", "Quetta"].map(
                (city) => (
                  <li key={city}>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="location"
                        value={city}
                        checked={selectedCity === city}
                        onChange={() => handleCityChange(city)}
                      />
                      {city}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Charts Section */}
        <div className="col-span-3 overflow-y-auto max-h-[80vh] grid grid-cols-1 gap-6">
          <div className="bg-[#0f2744] h-fit border border-[#1e3a5f] p-6 cursor-pointer">
            <Humidity data={humidityData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoiseLevel;
