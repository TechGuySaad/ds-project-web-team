import { useState, useEffect } from "react";
import LineChart from "./Traffic/LineChart";
import BarChart from "./Traffic/BarChart";
import { FaHome } from "react-icons/fa";

function TrafficFlow() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("Lahore"); // Default city
  const [cityList] = useState([
    "Islamabad",
    "Karachi",
    "Lahore",
    "Peshawar",
    "Quetta",
  ]);
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    // Fetch data for LineChart from Flask API with the selected city as a query parameter
    fetch(`http://127.0.0.1:5002/api/monthly-congestion?city=${selectedCity}`)
      .then((response) => response.json())
      .then((data) => {
        setLineChartData(data);
      })
      .catch((error) => {
        console.error("Error fetching data for LineChart:", error);
      });
  }, [selectedCity]);

  useEffect(() => {
    // Fetch data for BarChart from Flask API
    fetch("http://127.0.0.1:5000/api/city-congestion-bar")
      .then((response) => response.json())
      .then((data) => {
        // Filter bar chart data for the selected city
        const filteredData = data.filter(
          (item) => item.location === selectedCity
        );
        setBarChartData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data for BarChart:", error);
      });
  }, [selectedCity]);

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
              {cityList.map((city) => (
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
              ))}
            </ul>
          </div>
        </div>

        {/* Charts Section */}
        <div className="col-span-3 overflow-y-auto max-h-[80vh] grid grid-cols-1 gap-6">
          <div className="bg-[#0f2744] h-fill border border-[#1e3a5f]  cursor-pointer">
            <LineChart data={lineChartData} />
          </div>
          <div className="bg-[#0f2744] h-fill border border-[#1e3a5f]  cursor-pointer">
            <BarChart data={barChartData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrafficFlow;
