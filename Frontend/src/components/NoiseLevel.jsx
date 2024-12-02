import { useState, useEffect } from "react";
import Humidity from "./NoiseLevel/Humidity";
import AirQuality from "./NoiseLevel/AirQualityNoise";

function NoiseLevel() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("Lahore"); // Default city
  const [humidityData, setHumidityData] = useState([]); // Data for Humidity component
  const [noiseData, setNoiseData] = useState([]); // Data for Noise component

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Define dummy data for humidity
    const cityHumidityData = {
      Islamabad: [{ City: "Islamabad", Humidity: 72 }],
      Karachi: [{ City: "Karachi", Humidity: 82 }],
      Lahore: [{ City: "Lahore", Humidity: 65 }],
      Peshawar: [{ City: "Peshawar", Humidity: 55 }],
      Quetta: [{ City: "Quetta", Humidity: 45 }],
    };

    // Define dummy data for noise levels
    const cityNoiseData = {
      Islamabad: [
        { Time: "10:00", NoiseLevel: 55 },
        { Time: "11:00", NoiseLevel: 60 },
        { Time: "12:00", NoiseLevel: 58 },
        { Time: "13:00", NoiseLevel: 62 },
        { Time: "14:00", NoiseLevel: 61 },
      ],
      Karachi: [
        { Time: "10:00", NoiseLevel: 65 },
        { Time: "11:00", NoiseLevel: 70 },
        { Time: "12:00", NoiseLevel: 68 },
        { Time: "13:00", NoiseLevel: 72 },
        { Time: "14:00", NoiseLevel: 71 },
      ],
      Lahore: [
        { Time: "10:00", NoiseLevel: 45 },
        { Time: "11:00", NoiseLevel: 50 },
        { Time: "12:00", NoiseLevel: 48 },
        { Time: "13:00", NoiseLevel: 52 },
        { Time: "14:00", NoiseLevel: 51 },
      ],
      Peshawar: [
        { Time: "10:00", NoiseLevel: 40 },
        { Time: "11:00", NoiseLevel: 42 },
        { Time: "12:00", NoiseLevel: 44 },
        { Time: "13:00", NoiseLevel: 43 },
        { Time: "14:00", NoiseLevel: 41 },
      ],
      Quetta: [
        { Time: "10:00", NoiseLevel: 35 },
        { Time: "11:00", NoiseLevel: 38 },
        { Time: "12:00", NoiseLevel: 37 },
        { Time: "13:00", NoiseLevel: 40 },
        { Time: "14:00", NoiseLevel: 39 },
      ],
    };

    // Set data for the selected city
    setHumidityData(cityHumidityData[selectedCity]);
    setNoiseData(cityNoiseData[selectedCity]);
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
            <AirQuality data={noiseData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoiseLevel;
