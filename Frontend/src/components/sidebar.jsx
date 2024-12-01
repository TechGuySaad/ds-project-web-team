import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CloudRain, Thermometer, Car, Battery, Volume2, Droplets, MapPin, Cloud } from 'lucide-react'

interface SidebarProps {
  activeCity: string
  activeInsight: string
  title: string
  onCityChange: (city: string) => void
}

export function Sidebar({ activeCity, activeInsight, title, onCityChange }: SidebarProps) {
  return (
    <div className="space-y-6">
      <Card className="bg-[#0f2744] border-[#1e3a5f]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue={activeCity} onValueChange={onCityChange} className="space-y-3">
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
          <div className="space-y-3">
            <Link
              href="/air-quality"
              className={`flex items-center space-x-2 p-2 rounded hover:bg-[#1e3a5f] ${
                activeInsight === "air-quality" ? "bg-[#1e3a5f]" : ""
              }`}
            >
              <CloudRain className="h-4 w-4" />
              <span>Air Quality Analysis</span>
            </Link>
            <Link
              href="/temperature"
              className={`flex items-center space-x-2 p-2 rounded hover:bg-[#1e3a5f] ${
                activeInsight === "temperature" ? "bg-[#1e3a5f]" : ""
              }`}
            >
              <Thermometer className="h-4 w-4" />
              <span>Temperature Trends</span>
            </Link>
            <Link
              href="/traffic"
              className={`flex items-center space-x-2 p-2 rounded hover:bg-[#1e3a5f] ${
                activeInsight === "traffic" ? "bg-[#1e3a5f]" : ""
              }`}
            >
              <Car className="h-4 w-4" />
              <span>Traffic Flow Analysis</span>
            </Link>
            <Link
              href="/energy"
              className={`flex items-center space-x-2 p-2 rounded hover:bg-[#1e3a5f] ${
                activeInsight === "energy" ? "bg-[#1e3a5f]" : ""
              }`}
            >
              <Battery className="h-4 w-4" />
              <span>Energy Consumption Analysis</span>
            </Link>
            <Link
              href="/noise"
              className={`flex items-center space-x-2 p-2 rounded hover:bg-[#1e3a5f] ${
                activeInsight === "noise" ? "bg-[#1e3a5f]" : ""
              }`}
            >
              <Volume2 className="h-4 w-4" />
              <span>Noise Levels</span>
            </Link>
            <Link
              href="/humidity"
              className={`flex items-center space-x-2 p-2 rounded hover:bg-[#1e3a5f] ${
                activeInsight === "humidity" ? "bg-[#1e3a5f]" : ""
              }`}
            >
              <Droplets className="h-4 w-4" />
              <span>Humidity Levels</span>
            </Link>
            <Link
              href="/pollution"
              className={`flex items-center space-x-2 p-2 rounded hover:bg-[#1e3a5f] ${
                activeInsight === "pollution" ? "bg-[#1e3a5f]" : ""
              }`}
            >
              <MapPin className="h-4 w-4" />
              <span>Pollution Hotspots</span>
            </Link>
            <Link
              href="/weather"
              className={`flex items-center space-x-2 p-2 rounded hover:bg-[#1e3a5f] ${
                activeInsight === "weather" ? "bg-[#1e3a5f]" : ""
              }`}
            >
              <Cloud className="h-4 w-4" />
              <span>Weather Conditions</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

