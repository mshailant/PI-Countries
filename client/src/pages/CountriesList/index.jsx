import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountriesContainer, CountriesWrapper } from "./CountriesListElements";
import CountryCard from "../../components/CountryCard";
import { getCountries } from "../../actions";

const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

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
