"use client";

import Select from "react-select";
import { Country, City } from "country-state-city";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GlobeIcon } from "@heroicons/react/solid";

type option = {
  value: {
    latitude: string,
    longitude: string,
    isoCode: string,
  },
  label: string,
} | null;

type optionCity = {
  value: {
    latitude: string;
    longitude: string;
    stateCode: string;
    name: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const optionsCity = City.getAllCities().map((city) => ({
  value: {
    latitude: city.latitude,
    longitude: city.longitude,
    isoCode: city.stateCode,
  },
  label: city.name,
}));
const CityPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<optionCity>(null);
  const router = useRouter();



  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);

  }
  const handleSelectedCity = (option: optionCity) => {
    setSelectedCity(option);
    router.push(`location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex space-x-5 items-center text-white/80">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Choose your country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>
      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex space-x-5 items-center text-white/80">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="country">Choose your city</label>
          </div>
          <Select
            className="text-black"
            value={selectedCity}
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((state) => ({
              value: {
                latitude: state.latitude!,
                longitude: state.longitude!,
                countryCode: state.countryCode,
                name: state.name,
                stateCode: state.stateCode,
              },
              label: state.name,
            }))}
          />
        </div>
      )}
    </div>
  );
};

export default CityPicker;
