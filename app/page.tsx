"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#394f68] to-[#000000] p-10 flex flex-col justify-center items-center">
      <Card className="bg-gradient-to-br from-[#394f68] to-[#ffffff] rounded-lg max-w-4xl mx-auto">
        <h1 className="text-6xl text-center mb-10 font-bold text-gray-600">Wazzer AI</h1>
        <Subtitle className="text-xl text-center">Pick up any country, city, and we will catch the weather for you!</Subtitle>

        <Divider className="mb-10" />

        <Card className="bg-gradient-to-br from-[#394f68] to-[#000000] rounded "><CityPicker /></Card>
      </Card>
    </main>
  );
}
