import requests
import pandas as pd
import matplotlib.pyplot as plt

# Set up OpenWeatherMap API information
api_key = "354a9cf6b29503b9065129388b4702c8"
city = "Lahore"
url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"

# Retrieve and process current weather data from the API
response = requests.get(url)
data = response.json()

# Check if the request was successful
if response.status_code == 200:
    # Extract key information
    weather_data = {
        "city": data["name"],
        "temperature": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "pressure": data["main"]["pressure"],
        "weather": data["weather"][0]["description"],
        "wind_speed": data["wind"]["speed"]
    }
    
    # Convert to DataFrame for better readability
    current_weather_df = pd.DataFrame([weather_data])
    print("Current Weather Data for Lahore:")
    print(current_weather_df)
else:
    print("Error fetching data:", data.get("message", "Unknown error"))

# Simulated sample data for one week to use for visualization
sample_data = {
    "date": pd.date_range(start="2024-10-01", periods=7, freq="D"),
    "temperature": [31.2, 32.5, 30.1, 29.8, 31.7, 32.0, 30.5],
    "humidity": [24, 25, 28, 30, 26, 25, 27],
    "pressure": [1007, 1008, 1005, 1006, 1009, 1010, 1006],
    "wind_speed": [5.2, 4.8, 5.0, 5.5, 5.3, 4.9, 5.1],
    "weather": ["haze", "clear sky", "haze", "cloudy", "haze", "clear sky", "cloudy"]
}

# Convert sample data to DataFrame
weather_df = pd.DataFrame(sample_data)
print("\nSimulated Weekly Weather Data for Lahore:")
print(weather_df)

# Visualization 1: Temperature Trend Over Time
plt.figure(figsize=(10, 5))
plt.plot(weather_df["date"], weather_df["temperature"], marker="o", color="coral", linestyle="-")
plt.title("Temperature Trend Over Time in Lahore")
plt.xlabel("Date")
plt.ylabel("Temperature (°C)")
plt.grid()
plt.show()

# Visualization 2: Humidity and Pressure Comparison
plt.figure(figsize=(10, 5))
plt.plot(weather_df["date"], weather_df["humidity"], marker="o", color="blue", label="Humidity (%)")
plt.plot(weather_df["date"], weather_df["pressure"], marker="s", color="green", label="Pressure (hPa)")
plt.title("Humidity and Pressure Over Time in Lahore")
plt.xlabel("Date")
plt.ylabel("Values")
plt.legend()
plt.grid()
plt.show()

# Visualization 3: Wind Speed Visualization
plt.figure(figsize=(10, 5))
plt.bar(weather_df["date"], weather_df["wind_speed"], color="skyblue")
plt.title("Wind Speed Over Time in Lahore")
plt.xlabel("Date")
plt.ylabel("Wind Speed (m/s)")
plt.grid(axis="y")
plt.show()
