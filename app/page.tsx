"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import { Tilt } from "react-tilt";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500  to-blue-700 p-10 flex flex-col justify-center items-center">
      <Tilt>
        <Card className=" rounded-lg max-w-4xl mx-auto bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-md">
          <ul className="flex text-6xl font-bold justify-center mb-10">
            <li>
              <h1 className="text-red-500">W</h1>
            </li>
            <li>
              <h1 className="text-orange-500">a</h1>
            </li>
            <li>
              <h1 className="text-yellow-500">z</h1>
            </li>
            <li>
              <h1 className="text-yellow-500">z</h1>
            </li>
            <li>
              <h1 className="text-blue-500">e</h1>
            </li>
            <li>
              <h1 className="text-blue-700">r</h1>
            </li>
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
