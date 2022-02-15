import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountriesContainer, CountriesWrapper } from "./CountriesListElements";
import CountryCard from "../../components/CountryCard";
import { getCountries, filterCountries, sortCountries } from "../../actions";
import { Pagination } from "../../components/Pagination";
import {
  MenuContainer,
  MenuWrapper,
  Button,
} from "../../components/Menu/MenuElements";
import { Input, Select, TextMenu } from "../../components/InputElements";

let PageSize = 10;
let fistPageSize = 9;

const CountriesList = () => {
  const dispatch = useDispatch();
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = () => {
    const firstPageIndex =
      (currentPage - 1) * (currentPage === 1 ? fistPageSize : PageSize);
    const lastPageIndex =
      firstPageIndex + (currentPage === 1 ? fistPageSize : PageSize);
    console.log(firstPageIndex, lastPageIndex);
    if (currentPage === 1) {
      return filteredCountries.slice(firstPageIndex, lastPageIndex);
    } else {
      return filteredCountries.slice(firstPageIndex - 1, lastPageIndex - 1);
    }
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleSort = (event) => {
    event.preventDefault();
    dispatch(sortCountries(event.target.value));
    setOrder(`Order ${event.target.value}`);
    setCurrentPage(1);
  };

  const handleFilter = (event) => {
    dispatch(filterCountries(event.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <MenuContainer>
        <MenuWrapper>
          <Input placeholder="Search" />
          <Button>&#128269;</Button>
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
          <Select
            placeholder="--Chose One--"
            onChange={(event) => handleSort(event)}
          >
            <option value="Def">--Chose one--</option>
            <option value="A-Z">A..Z &#129045;</option>
            <option value="Z-A">Z..A &#129047;</option>
            <option value="PopAsc">Population &#129045;</option>
            <option value="PopDesc">Population &#129047;</option>
          </Select>
        </MenuWrapper>
      </MenuContainer>
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
