/**
 * The cleanData function extracts specific weather data for a given city from a Root object in
 * TypeScript.
 * @param {Root} data - The `cleanData` function takes in two parameters: `data` of type `Root` and
 * `city` of type `string`. The function extracts specific data fields from the `data` object and
 * returns a new object with cleaned data related to the current weather and hourly forecast for a
 * specific city
 * @param {string} city - The `city` parameter in the `cleanData` function is a string that represents
 * the name of the city for which weather data is being cleaned. This parameter is used to include the
 * city name in the cleaned data object that is returned by the function.
 * @returns The `cleanData` function takes in data of type `Root` and a city string as parameters. It
 * extracts specific properties from the data object related to current weather and hourly forecast for
 * a given city. It then returns a new object containing cleaned and filtered data for the current
 * weather, hourly forecast, timezone information, timezone abbreviation, hourly units, and the city
 * provided as input.
 */
const cleanData = (data: Root, city: string) => {
  const {
    current_weather,
    timezone,
    hourly,
    hourly_units,
    timezone_abbreviation,
  } = data;

  const { temperature, windspeed, winddirection, weathercode, time } =
    current_weather;

  const {
    temperature_2m,
    snowfall,
    rain,
    relativehumidity_2m,
    precipitation_probability,
    uv_index,
  } = hourly;
  return {
    current_weather: {
      temperature,
      windspeed,
      winddirection,
      weathercode,
      time,
    },
    hourly: {
      temperature_2m: temperature_2m.slice(0, 24),
      snowfall: snowfall.slice(0, 24),
      rain: rain.slice(0, 24),
      relativehumidity_2m: relativehumidity_2m.slice(0, 24),
      precipitation_probability: precipitation_probability.slice(0, 24),
      uv_index: uv_index.slice(0, 24),
    },
    timezone,
    timezone_abbreviation,
    hourly_units,
    city,
  };
};

export default cleanData;