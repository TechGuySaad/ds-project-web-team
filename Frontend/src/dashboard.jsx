"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  CloudRain,
  Thermometer,
  Car,
  Battery,
  Volume2,
  Droplets,
  MapPin,
  Cloud,
} from "lucide-react";

// Sample data
const temperatureData = [
  { name: "Karachi", value: 20 },
  { name: "Lahore", value: 23 },
  { name: "Peshawar", value: 24 },
  { name: "Islamabad", value: 21 },
  { name: "Quetta", value: 17 },
];

const energyData = [
  { name: "Karachi", value: 2.21 },
  { name: "Lahore", value: 2.23 },
  { name: "Peshawar", value: 2.25 },
  { name: "Islamabad", value: 2.27 },
  { name: "Quetta", value: 2.29 },
];

const trafficData = Array.from({ length: 24 }, (_, i) => ({
  time: `${String(i).padStart(2, "0")}:00`,
  value: Math.random() * 15 + 5,
}));

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-center mb-8">
          Smart City Environment Monitoring System
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>2024/12/02</span>
            <span>Mon</span>
            <span>20:01:22</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            <span>Cloudy</span>
            <span>67F-71F</span>
            <Home className="h-4 w-4 ml-2" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1 space-y-6">
          <Card className="bg-[#0f2744] border-[#1e3a5f]">
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="all" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="islamabad" id="islamabad" />
                  <Label htmlFor="islamabad">Islamabad</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="karachi" id="karachi" />
                  <Label htmlFor="karachi">Karachi</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lahore" id="lahore" />
                  <Label htmlFor="lahore">Lahore</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="peshawar" id="peshawar" />
                  <Label htmlFor="peshawar">Peshawar</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="quetta" id="quetta" />
                  <Label htmlFor="quetta">Quetta</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="bg-[#0f2744] border-[#1e3a5f]">
            <CardHeader>
              <CardTitle>Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="air" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="air" id="air" />
                  <Label htmlFor="air" className="flex items-center gap-2">
                    <CloudRain className="h-4 w-4" />
                    Air Quality Analysis
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="temperature" id="temperature" />
                  <Label
                    htmlFor="temperature"
                    className="flex items-center gap-2"
                  >
                    <Thermometer className="h-4 w-4" />
                    Temperature Trends
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="traffic" id="traffic" />
                  <Label htmlFor="traffic" className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Traffic Flow Analysis
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="energy" id="energy" />
                  <Label htmlFor="energy" className="flex items-center gap-2">
                    <Battery className="h-4 w-4" />
                    Energy Consumption Analysis
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="noise" id="noise" />
                  <Label htmlFor="noise" className="flex items-center gap-2">
                    <Volume2 className="h-4 w-4" />
                    Noise Levels
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="humidity" id="humidity" />
                  <Label htmlFor="humidity" className="flex items-center gap-2">
                    <Droplets className="h-4 w-4" />
                    Humidity Levels
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pollution" id="pollution" />
                  <Label
                    htmlFor="pollution"
                    className="flex items-center gap-2"
                  >
                    <MapPin className="h-4 w-4" />
                    Pollution Hotspots
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weather" id="weather" />
                  <Label htmlFor="weather" className="flex items-center gap-2">
                    <Cloud className="h-4 w-4" />
                    Weather Conditions
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="col-span-3 grid grid-cols-2 gap-6">
          {/* Air Quality */}
          <Card className="col-span-2 bg-[#0f2744] border-[#1e3a5f]">
            <CardHeader>
              <CardTitle>Air Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                  <XAxis dataKey="time" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#06b6d4"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Temperature Trends */}
          <Card className="bg-[#0f2744] border-[#1e3a5f]">
            <CardHeader>
              <CardTitle>Temperature Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Bar dataKey="value" fill="#06b6d4" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Energy Consumption */}
          <Card className="bg-[#0f2744] border-[#1e3a5f]">
            <CardHeader>
              <CardTitle>Energy Consumption Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Bar dataKey="value" fill="#06b6d4" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Traffic Flow */}
          <Card className="col-span-2 bg-[#0f2744] border-[#1e3a5f]">
            <CardHeader>
              <CardTitle>Traffic Flow Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                  <XAxis dataKey="time" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#06b6d4"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
