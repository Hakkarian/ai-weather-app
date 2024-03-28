import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import InformationPanel from "@/components/InformationPanel";
import StatCard from "@/components/StatCard";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import { Callout } from "@tremor/react";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      latitude: lat,
      longitude: long,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;
  console.log(results);

  return (
    <div>
      <InformationPanel
        city={city}
        lat={lat}
        long={long}
        results={results} />

      <div>
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last updated at:
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>
          <div className="mb-10 m-2">
            <CalloutCard message="This is where GPT-summary will go" />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum temperature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}`}
              color="blue"
            />
            <StatCard
              title="Minimum temperature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}`}
              color="yellow"
            />

            <div>
              <StatCard
                title="UV Index"
                metric={`${results.daily.uv_index_max?.[0].toFixed(1)}`}
                color="rose"
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 0 && (
                <CalloutCard
                  message="The UV is high today, be sure to wear SPF!"
                  warning
                />
              )}
            </div>
            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                color="violet"
              />
              <StatCard
                title="Wind Direction"
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color="emerald"
              />
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        <div className="space-y-3">
          {/* TempChart */}
          {/* RainChart */}
          {/* HumidityChart */}
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
