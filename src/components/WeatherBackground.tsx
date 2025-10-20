import { useEffect, useState, type ReactNode } from "react";
import { useWeather } from "../context/weatherContext ";

interface Props {
  children: ReactNode;
}

const WeatherBackground = ({ children }: Props) => {
  const { weather } = useWeather();
  const [weatherImage, setWeatherImage] = useState("bg-weather");

  useEffect(() => {
    const condition = weather?.weather[0].main;
    switch (condition) {
      case "Clouds":
        setWeatherImage("bg-cloudy");
        break;
      case "Clear":
        setWeatherImage("bg-sunny");
        break;
      case "Rain":
        setWeatherImage("bg-rainy");
        break;
      case "Thunderstorm":
        setWeatherImage("bg-snowy");
        break;

      default:
        setWeatherImage("bg-weather");
        break;
    }
  }, [weather]);
  return (
    <div className={`${weatherImage} !min-h-screen bg-center bg-cover `}>
      {children}
    </div>
  );
};

export default WeatherBackground;
