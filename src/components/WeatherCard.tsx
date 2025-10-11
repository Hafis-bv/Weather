import Sidebar from "./Sidebar";

const WeatherCard = () => {
  return (
    <div className="bg-weather h-screen bg-center bg-cover ">
      <div className="flex sm:gap-2 sm:flex-row flex-col sm:items-center sm:absolute sm:bottom-5 sm:left-5  pt-40  text-center ">
        <h1 className="font-bold text-4xl text-gray-300">21°C</h1>
        <div className="">
          <h1 className="font-bold text-4xl text-gray-300">Baku</h1>
          <p className="font-bold text-xl text-gray-300">Saturday</p>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default WeatherCard;
