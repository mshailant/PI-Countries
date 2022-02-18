import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountriesContainer, CountriesWrapper } from "./CountriesListElements";
import CountryCard from "../../components/CountryCard";
import {
  getCountries,
  filterCountries,
  sortCountries,
  searchCountries,
  resetSearch,
} from "../../actions";
import { Pagination } from "../../components/Pagination";
import {
  MenuContainer,
  MenuWrapper,
  Button,
  NoCountriesSearch,
} from "../../components/Menu/MenuElements";
import { Input, Select, TextMenu } from "../../components/InputElements";

let PageSize = 10;
let fistPageSize = 9;

const CountriesList = () => {
  const dispatch = useDispatch();
  const filteredCountries = useSelector((state) => state.filteredCountries);
  // const countries = useSelector((state) => state.countries);
  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countryName, setCountryName] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const currentData = () => {
    const firstPageIndex =
      (currentPage - 1) * (currentPage === 1 ? fistPageSize : PageSize);
    const lastPageIndex =
      firstPageIndex + (currentPage === 1 ? fistPageSize : PageSize);
    if (currentPage === 1) {
      return filteredCountries.slice(firstPageIndex, lastPageIndex);
    } else {
      return filteredCountries.slice(firstPageIndex - 1, lastPageIndex - 1);
    }
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleNameChange = (event) => {
    setCountryName(event.target.value);
  };

  const handleSort = (event) => {
    event.preventDefault();
    dispatch(sortCountries(event.target.value));
    setOrder(`Order ${event.target.value}`);
    setCurrentPage(1);
  };

  const handleFilter = (event) => {
    dispatch(filterCountries(event.target.value, isSearch));
    setCurrentPage(1);
  };

  const searchCountry = (event) => {
    event.preventDefault();
    dispatch(searchCountries(countryName));
    setCurrentPage(1);
    setIsSearch(true);
  };

  const handleResetSearch = () => {
    if (isSearch) {
      dispatch(resetSearch());
      setIsSearch(false);
      setCountryName("");
      setFilter("All");
      setCurrentPage(1);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchCountry(event);
    }
  };

  return (
    <>
      <MenuContainer>
        <MenuWrapper>
          <Input
            type="text"
            value={countryName}
            placeholder="Search by Name"
            onChange={(event) => handleNameChange(event)}
            onKeyPress={(event) => handleKeyPress(event)}
          />
          <Button onClick={(event) => searchCountry(event)}>&#128269;</Button>
          <Button onClick={(event) => handleResetSearch(event)}>
            &#x274C;
          </Button>
          <TextMenu>Filter By Region</TextMenu>
          <Select onChange={(event) => handleFilter(event)}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Select>
          <TextMenu>Sort By</TextMenu>
          <Select defaultValue="" onChange={(event) => handleSort(event)}>
            <option disabled value="">
              --Chose one--
            </option>
            <option value="A-Z">A..Z &#129045;</option>
            <option value="Z-A">Z..A &#129047;</option>
            <option value="PopAsc">Population &#129045;</option>
            <option value="PopDesc">Population &#129047;</option>
          </Select>
        </MenuWrapper>
      </MenuContainer>
      {filteredCountries?.length === 0 && (
        <NoCountriesSearch>{`No countries found`}</NoCountriesSearch>
      )}
      <CountriesContainer>
        <CountriesWrapper>
          {currentData().map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </CountriesWrapper>
      </CountriesContainer>
      <Pagination
        key={currentPage}
        currentPage={currentPage}
        totalCount={filteredCountries.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      ></Pagination>
    </>
  );
};

export default CountriesList;
