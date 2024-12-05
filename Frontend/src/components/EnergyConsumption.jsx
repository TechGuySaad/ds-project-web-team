import { useState, useEffect } from "react";
import axios from "axios"; // For making API requests
import BoxPlot from "./AirQualityCharts/BoxPlot";
import TimeSeries from "./AirQualityCharts/TimeSeries";
import Histogram from "./AirQualityCharts/Histogram";
import SeasonalTrends from "./AirQualityCharts/SeasonalTrends";
import SeasonalBarChart from "./AirQualityCharts/SeasonalBarChart";
import { FaHome } from "react-icons/fa";
function EnergyConsumption() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("Lahore"); // Default city
  const [cityData, setCityData] = useState(null); // Data fetched from the API

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch data for the selected city
    const fetchCityData = async () => {
      try {
        const responses = await Promise.all([
          axios.get(`http://127.0.0.1:5000/api/data/${selectedCity}/boxplot`),
          axios.get(
            `http://127.0.0.1:5000/api/data/${selectedCity}/timeseries`
          ),
          axios.get(`http://127.0.0.1:5000/api/data/${selectedCity}/histogram`),
          axios.get(
            `http://127.0.0.1:5000/api/data/${selectedCity}/seasonaltrends`
          ),
          axios.get(
            `http://127.0.0.1:5000/api/data/${selectedCity}/seasonalbarchart`
          ),
        ]);

        setCityData({
          boxPlotData: responses[0].data.boxPlotData,
          timeSeriesData: responses[1].data.timeSeriesData,
          histogramData: responses[2].data.histogramData,
          seasonalTrendsData: responses[3].data.seasonalTrendsData,
          barChartData: responses[4].data.seasonalBarChartData,
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
            <a href="/" className="ml-2">
              <span className="h-4 w-4">
                {" "}
                <FaHome size={20} color="#FFFFFF" />
              </span>
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
          {cityData ? (
            <>
              <div className="bg-[#0f2744] h-96 border border-[#1e3a5f] p-6 cursor-pointer">
                <TimeSeries
                  data={cityData.timeSeriesData}
                  title={`Time Series of PM 2.5 Levels in ${selectedCity}`}
                />
              </div>
              <div className="bg-[#0f2744] h-96 border border-[#1e3a5f] p-6 cursor-pointer">
                <SeasonalTrends
                  data={cityData.seasonalTrendsData}
                  title={`Seasonal Trends of PM 2.5 Levels in ${selectedCity}`}
                />
              </div>
              <div className="bg-[#0f2744] h-96 border border-[#1e3a5f] p-6 cursor-pointer">
                <SeasonalBarChart
                  data={cityData.barChartData}
                  title={`Seasonal PM 2.5 Levels in ${selectedCity}`}
                />
              </div>
              <div className="bg-[#0f2744] h-96 border border-[#1e3a5f] p-6 cursor-pointer">
                <BoxPlot
                  data={cityData.boxPlotData}
                  title={`PM 2.5 Levels in ${selectedCity}`}
                />
              </div>

              <div className="bg-[#0f2744] h-96 border border-[#1e3a5f] p-6 cursor-pointer">
                <Histogram
                  data={cityData.histogramData}
                  title={`Distribution of PM 2.5 Levels in ${selectedCity}`}
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

export default EnergyConsumption;
