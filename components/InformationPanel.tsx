"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Image from "next/image";
import CityPicker from "./CityPicker";
import weatherCodeToString from "@/lib/weatherCodeToString";

type Props = {
  city: string;
  results: Root;
  lat: string;
  long: string;
};
function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#6f6103] to-[#1c406a] text-white p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="text-xs text-gray-400 mt-3">
          Long/Lat: {long}, {lat}
        </p>
      </div>
      <CityPicker />
      <hr className="my-10" />
      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p>
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <div>
          <p className="text-xl font-bold">
            {new Date().toLocaleTimeString("en-GB", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        </div>
      </div>
      <hr className="my-10 mb-5" />
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            alt={weatherCodeToString[results.current_weather.weathercode].label}
            width={75}
            height={75}
          />
          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">
              {results.current_weather.temperature.toFixed(1)}°C
            </p>
            <p className="text-right font-extralight">
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex gap-3 flex-col mt-5">
          <li className="flex items-center space-x-2 px-4 py-3 border border-[#fffb00] rounded-md bg-gradient-to-br from-[#ffffff] to-[#ffee00]">
            <SunIcon className="h-10 w-10 text-black" />
            <div className="flex-1 flex justify-between items-center text-black">
              <p className="font-extralight">Sunrise</p>
              <p className="uppercase text-2xl">
                {new Date(results.daily.sunrise[0]).toLocaleTimeString(
                  "en-GB",
                  {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  }
                )}
              </p>
            </div>
          </li>
          <li className="flex items-center space-x-2 px-4 py-3 border border-[#ffa514] rounded-md bg-gradient-to-br from-[#e47221] to-[#000000]">
            <MoonIcon className="h-10 w-10 text-gray-200" />
            <div className="flex-1 flex justify-between items-center text-gray-200">
              <p className="font-extralight">Sunset</p>
              <p className="uppercase text-2xl">
                {new Date(results.daily.sunset[0]).toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InformationPanel;
