import { useState, type FormEvent } from "react";
import { IoIosSearch } from "react-icons/io";
import { useWeather } from "../context/weatherContext ";

const Sidebar = () => {
  const [title, setTitle] = useState<string>("");
  const { weather, loading, error, getWeather } = useWeather();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const data = await getWeather(title);
      if (data) {
        // alert("We found your city");
        console.log(weather);
      }
      setTitle("");
    } catch (e) {
      console.log(e);
    }
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        loading
      </div>
    );
  }

  return (
    <div className="absolute h-[75%] sm:h-screen sm:w-[45%] sm:rounded-tr-none sm:rounded-bl-xl bottom-0 right-0 rounded-tl-xl rounded-tr-xl bg-white/10 backdrop-blur-lg p-4 w-full shadow-lg text-gray-300 ">
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
              21 °C
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Humidity</span>
            <span className="flex items-center font-semibold gap-0.5">
              21 °C
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Pressure</span>
            <span className="flex items-center font-semibold gap-0.5">
              21 °C
            </span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Country</span>
            <span className="flex items-center font-semibold gap-0.5">
              21 °C
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Weather</span>
            <span className="flex items-center font-semibold gap-0.5">
              21 °C
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Description</span>
            <span className="flex items-center font-semibold gap-0.5">
              21 °C
            </span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Wind</span>
            <span className="flex items-center font-semibold gap-0.5">
              21 °C
            </span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Max temperature</span>
            <span className="flex items-center font-semibold gap-0.5">
              21 °C
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Min temperature</span>
            <span className="flex items-center font-semibold gap-0.5">
              21 °C
            </span>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
      </div>
    </div>
  );
};

export default Sidebar;
