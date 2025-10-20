import { useState, type FormEvent } from "react";
import { IoIosSearch } from "react-icons/io";
import { useWeather } from "../context/weatherContext ";
import { BeatLoader } from "react-spinners";
import { Bounce, toast } from "react-toastify";

const Sidebar = () => {
  const [title, setTitle] = useState<string>("");
  const { weather, loading, getWeather } = useWeather();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const data = await getWeather(title);
      if (!data) {
        toast.error("City not found", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      setTitle("");
    } catch (e) {
      console.log(e);
    }
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <BeatLoader />;
      </div>
    );
  }

  return (
    <div className="sm:absolute min-h-screen mt-20 sm:h-screen sm:w-[45%] sm:rounded-tr-none sm:rounded-bl-xl bottom-0 right-0 rounded-tl-xl rounded-tr-xl bg-white/10 backdrop-blur-lg p-4 w-full shadow-lg text-gray-300 ">
      <form
        onSubmit={handleSubmit}
        className="relative max-w-[350px] mx-auto flex justify-center flex-col items-center py-10"
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Search..."
          className=" rounded-xl max-w-[350px] w-full py-2 pl-3 outline-none pr-10 text-slate-800 bg-gray-300"
        />
        <button className="absolute right-2 ">
          <IoIosSearch color="gray" size={25} />
        </button>
      </form>
      <div>
        <h1 className="text-center font-medium tracking-[2px] uppercase mb-4 text-gray-300">
          Weather Details
        </h1>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Feels like</span>
            <span className="flex items-center font-semibold gap-0.5">
              {weather?.main.feels_like.toFixed(0)}°C
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Humidity</span>
            <span className="flex items-center font-semibold gap-0.5">
              {weather?.main.humidity}%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Pressure</span>
            <span className="flex items-center font-semibold gap-0.5">
              {weather?.main.pressure}
            </span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Country</span>
            <span className="flex items-center font-semibold gap-0.5">
              {weather?.sys.country}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Weather</span>
            <span className="flex items-center font-semibold gap-0.5">
              {weather?.weather[0].main}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Description</span>
            <span className="flex items-center font-semibold gap-0.5">
              {weather?.weather[0].description}
            </span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Wind</span>
            <span className="flex items-center font-semibold gap-0.5">
              {weather?.wind.speed.toFixed(0)} m/s
            </span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Max temperature</span>
            <span className="flex items-center font-semibold gap-0.5">
              {weather?.main.temp_max.toFixed(0)} °C
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Min temperature</span>
            <span className="flex items-center font-semibold gap-0.5">
              {weather?.main.temp_min.toFixed(0)} °C
            </span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
      </div>
    </div>
  );
};

export default Sidebar;
