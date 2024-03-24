import React from 'react'

type Props = {
    params: {
        city: string,
        lat: string,
        long: string
    }
}

function WeatherPage({ params: { city, lat, long } }: Props) {
  return (
      <div>Here is coords of your city: {city}, {lat}, {long}</div>
  )
}

export default WeatherPage