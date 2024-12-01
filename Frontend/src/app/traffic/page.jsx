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

const monthlyData = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2024, i).toLocaleString("default", { month: "short" }),
  value: Math.random() * 0.4 + 0.2,
}));

const cityData = [
  { name: "Islamabad", value: 0.53 },
  { name: "Lahore", value: 0.55 },
  { name: "Karachi", value: 0.51 },
  { name: "Peshawar", value: 0.54 },
  { name: "Quetta", value: 0.52 },
];

export default function TrafficPage() {
  const [activeCity, setActiveCity] = useState("all");

  return (
    <Layout activeInsight="Traffic Flow Analysis">
      <div className="max-w-[1400px] mx-auto p-6 grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <Sidebar
            activeCity={activeCity}
            activeInsight="traffic"
            title="Traffic Flow"
            onCityChange={setActiveCity}
          />
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-6">
          <ChartCard
            title="Average Monthly Congestion Level"
            className="col-span-2"
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Line type="monotone" dataKey="value" stroke="#06b6d4" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title="Average Congestion Level Across Cities">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Bar dataKey="value" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
          {/* Add more traffic-specific charts */}
        </div>
      </div>
    </Layout>
  );
}
