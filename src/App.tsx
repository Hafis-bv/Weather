import { useEffect } from "react";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const key = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=${key}&units=metric`
      );
      const data = await res.json();
      console.log("Погода:", data);
    }

    getWeather();
  }, []);

  return (
    <>
      <WeatherCard />
    </>
  );
};

export default App;
