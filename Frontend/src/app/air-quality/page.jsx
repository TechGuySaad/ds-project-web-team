"use client";

import { useState } from "react";
import { Layout } from "@/components/layout";
import { Sidebar } from "@/components/sidebar";
import { ChartCard } from "@/components/chart-card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const windSpeedData = Array.from({ length: 100 }, (_, i) => ({
  date: new Date(2024, 0, i + 1).toISOString().split("T")[0],
  value: Math.random() * 20 + 5,
}));

export default function AirQualityPage() {
  const [activeCity, setActiveCity] = useState("all");

  return (
    <Layout activeInsight="Air Quality Analysis">
      <div className="max-w-[1400px] mx-auto p-6 grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <Sidebar
            activeCity={activeCity}
            activeInsight="air-quality"
            title="Air Quality"
            onCityChange={setActiveCity}
          />
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-6">
          <ChartCard
            title="Wind Speed Trends Across Cities"
            className="col-span-2"
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={windSpeedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                <XAxis dataKey="date" stroke="#fff" />
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
          {/* Add more air quality specific charts */}
        </div>
      </div>
    </Layout>
  );
}
