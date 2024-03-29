"use client";

import { AreaChart, Card, Title } from "@tremor/react";

type Charts = "temperature" | "humidity" | "rain";

type Props = {
  results: Root;
  type: Charts;
};

function ChartCard({ results, type }: Props) {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

    const data = hourly.map((hour, i) => {
        switch (type) {
          case "humidity":
            return {
              time: Number(hour),
              "Humidity (%)": results.hourly.relativehumidity_2m[i],
            };
          case "rain":
            return {
              time: Number(hour),
              "Rain (%)": results.hourly.precipitation_probability[i],
            };
          default: 
            return {
              time: Number(hour),
              "UV Index": results.hourly.uv_index[i],
              "Temperature (C)": results.hourly.temperature_2m[i],
            };
        }
  });

  const dataFormatter = (number: number) => `${number}`;

  return (
    <Card>
      <Title>
        {type === "humidity"
          ? "Humidity"
          : type === "rain"
          ? "Rain"
          : "Temperature | UV Index"}
      </Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={
          type === "humidity"
            ? ["Humidity (%)"]
            : type === "rain"
            ? ["Rain (%)"]
            : ["Temperature (C)", "UV Index"]
        }
        colors={
          type === "humidity"
            ? ["zinc"]
            : type === "rain"
            ? ["blue"]
            : ["yellow", "rose"]
        }
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={30}
      />
    </Card>
  );
}

export default ChartCard;
