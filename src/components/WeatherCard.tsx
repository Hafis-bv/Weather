import { useEffect, useState } from "react";
import { useWeather } from "../context/weatherContext ";
import Sidebar from "./Sidebar";

const WeatherCard = () => {
  const { weather, error } = useWeather();
  const [currentDay, setCurrentDay] = useState("No day");

  useEffect(() => {
    const currentDate = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = daysOfWeek[currentDate.getDay()];

    setCurrentDay(day);
  }, []);

  return (
    <div>
      <div className="flex sm:gap-2 sm:flex-row flex-col sm:items-center sm:absolute sm:bottom-5 sm:left-5 pt-20 text-center ">
        <h1 className="font-bold text-4xl text-gray-300">
          {!error && weather?.main.temp.toFixed(0) + "°C"}
        </h1>
        <div className="">
          <h1 className="font-bold text-5xl text-gray-300">{weather?.name}</h1>
          <p className="font-bold text-2xl text-gray-300">
            {!error && currentDay}
          </p>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default WeatherCard;
