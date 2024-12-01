import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import AirQuality from "./components/AirQuality";
import TemperatureTrend from "./components/TemperatureTrend";
import EnergyConsumption from "./components/EnergyConsumption";
import TrafficFlow from "./components/TrafficFlow";
import PollutionHotspot from "./components/PollutionHotspot";
import Weather from "./components/Weather";
import NoiseLevel from "./components/NoiseLevel";
import HumidityLevel from "./components/HumidityLevel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/air-quality" element={<AirQuality />} />
        <Route path="/temperature-trend" element={<TemperatureTrend />} />
        <Route path="/energy-consumption" element={<EnergyConsumption />} />
        <Route path="/traffic-flow" element={<TrafficFlow />} />
        <Route path="/pollution-hotspot" element={<PollutionHotspot />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/noise-level" element={<NoiseLevel />} />
        <Route path="/humidity-level" element={<HumidityLevel />} />
      </Routes>
    </Router>
  );
}

export default App;
