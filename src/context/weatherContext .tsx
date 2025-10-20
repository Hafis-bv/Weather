import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { WeatherType } from "../types/weather";
import axios from "axios";
interface WeatherProviderProps {
  children: ReactNode;
}

interface WeatherContext {
  weather: WeatherType | null;
  loading: boolean;
  error: string | null;
  getWeather: (city: string) => Promise<WeatherType>;
}

const weatherContext = createContext(null as WeatherContext | null);

export default function WeatherProvider({ children }: WeatherProviderProps) {
  const [weather, setWeather] = useState<WeatherType | null>(() => {
    const saved = localStorage.getItem("weatherData");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

  useEffect(() => {
    if (weather) {
      localStorage.setItem("weatherData", JSON.stringify(weather));
    }
  }, [weather]);

  async function getWeather(city: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(res.data);

      return res.data;
    } catch (e: any) {
      console.log(e.message);
      setError("Something went wrong!");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <weatherContext.Provider value={{ weather, loading, error, getWeather }}>
      {children}
    </weatherContext.Provider>
  );
}

export const useWeather = () => {
  const ctx = useContext(weatherContext);
  if (!ctx) {
    throw new Error("WeatherProvider should be wrapped across application");
  }

  return ctx;
};
