"use client";

import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#394f68] to-[#000000] p-10 flex flex-col justify-center items-center">
      <Card className="bg-gradient-to-br from-[#394f68] to-[#ffffff] rounded-lg max-w-4xl mx-auto">
        <Text className="text-6xl text-center mb-10 font-bold">MainPage</Text>
        <Subtitle className="text-xl text-center">Powered by OpenAI</Subtitle>

        <Divider className="mb-10" />

        <Card className="bg-gradient-to-br from-[#394f68] to-[#000000] rounded "></Card>
      </Card>
    </main>
  );
}
