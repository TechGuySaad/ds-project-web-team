import { useState, useEffect } from "react";
import axios from "axios";
import BarChart from "./Weather/BarChart";
import TimeSeries from "./Weather/TimeSeries";
import PrecipitationTrends from "./Weather/PrecipitationTrends";
import WindSpeedTrends from "./Weather/WindSpeedTrends";
import AirPressureTrends from "./Weather/AirPressureTrends";

function TemperatureTrend() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("Lahore");
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch data for the selected city from the Flask server
    const fetchCityData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/data/${selectedCity}`
        );

        setCityData({
          dates: response.data.dates,
          temperatures: response.data.avg_temp,
          avgTemp:
            response.data.avg_temp.reduce((a, b) => a + b, 0) /
            response.data.avg_temp.length,
          precipitation: response.data.prcp,
          windSpeed: response.data.wind_spd,
          airPressure: response.data.air_pres,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCityData();
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

      <div className="h-full w-full px-6 py-6 grid grid-cols-4 gap-6">
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

        <div className="col-span-3 overflow-y-auto max-h-[80vh] grid grid-cols-1 gap-6">
          {cityData ? (
            <>
              <div className="bg-[#0f2744] h-96 border border-[#1e3a5f] p-6 cursor-pointer">
                <TimeSeries
                  city={selectedCity}
                  dates={cityData.dates}
                  temperatures={cityData.temperatures}
                />
              </div>
              <div className="bg-[#0f2744] h-96 border border-[#1e3a5f] p-6 cursor-pointer">
                <BarChart city={selectedCity} temperature={cityData.avgTemp} />
              </div>
              <div className="bg-[#0f2744] h-96 border border-[#1e3a5f] p-6 cursor-pointer">
                <PrecipitationTrends
                  dates={cityData.dates}
                  precipitation={cityData.precipitation}
                />
              </div>
              <div className="bg-[#0f2744] h-96 border border-[#1e3a5f] p-6 cursor-pointer">
                <WindSpeedTrends
                  dates={cityData.dates}
                  windSpeed={cityData.windSpeed}
                />
              </div>
              <div className="bg-[#0f2744] h-96 border border-[#1e3a5f] p-6 cursor-pointer">
                <AirPressureTrends
                  dates={cityData.dates}
                  airPressure={cityData.airPressure}
                />
              </div>
            </>
          ) : (
            <p className="text-center text-white">Loading data...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TemperatureTrend;
