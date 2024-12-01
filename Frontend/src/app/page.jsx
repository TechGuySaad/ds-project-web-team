"use client";

import { useState } from "react";
import { Layout } from "@/components/layout";
import { Sidebar } from "@/components/sidebar";
import { ChartCard } from "@/components/chart-card";
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

const airQualityData = Array.from({ length: 24 }, (_, i) => ({
  time: `${String(i).padStart(2, "0")}:00`,
  value: Math.random() * 400 + 200,
}));

const temperatureData = [
  { name: "Karachi", value: 20 },
  { name: "Lahore", value: 23 },
  { name: "Peshawar", value: 24 },
  { name: "Islamabad", value: 21 },
  { name: "Quetta", value: 17 },
];

export default function DashboardPage() {
  const [activeCity, setActiveCity] = useState("all");

  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto p-6 grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <Sidebar
            activeCity={activeCity}
            activeInsight=""
            title="Location"
            onCityChange={setActiveCity}
          />
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-6">
          <ChartCard title="Air Quality" className="col-span-2">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={airQualityData}>
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
          </ChartCard>
          <ChartCard title="Temperature Trends">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Bar dataKey="value" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
          {/* Add more chart cards for other metrics */}
        </div>
      </div>
    </Layout>
  );
}
