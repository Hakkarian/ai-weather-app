"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import { Tilt } from "react-tilt";

const signs = [
  { name: "W", color: "red-500" },
  { name: "a", color: "orange-500" },
  { name: "z", color: "yellow-500" },
  { name: "z", color: "yellow-500" },
  { name: "e", color: "blue-500" },
  { name: "r", color: "blue-700" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500  to-blue-700 p-10 flex flex-col justify-center items-center">
      <Tilt>
        <Card className=" rounded-lg max-w-4xl mx-auto bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-md">
          <ul className="flex text-6xl font-bold justify-center mb-10">
            {signs.map((sign) => (
              <li key={`${Math.random() * Number(sign.color.split("-")[1])}`}>
                <h1 className={`text-${sign.color}`}>{sign.name}</h1>
              </li>
            ))}
          </ul>
          <Subtitle className="text-xl text-center">
            Pick up any country, city, and we will catch the weather for you!
          </Subtitle>

          <Divider className="mb-10" />

          <Card className="bg-gradient-to-br from-[#394f68] to-[#000000] rounded ">
            <CityPicker />
          </Card>
        </Card>
      </Tilt>
    </main>
  );
}
