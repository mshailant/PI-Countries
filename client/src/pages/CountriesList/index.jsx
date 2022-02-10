import React from "react";
import { CountriesContainer, CountriesWrapper } from "./CountriesListElements";
import CountryCard from "../../components/CountryCard";
import { countries } from "../../data/countries";

const CountriesList = () => {
  return (
    <>
      <CountriesContainer>
        <CountriesWrapper>
          {countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </CountriesWrapper>
      </CountriesContainer>
    </>
  );
};

export default CountriesList;
