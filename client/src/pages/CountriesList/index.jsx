import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountriesContainer, CountriesWrapper } from "./CountriesListElements";
import CountryCard from "../../components/CountryCard";
import { getCountries } from "../../actions";
import { Pagination } from "../../components/Pagination";

let PageSize = 9;

const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return countries.slice(firstPageIndex, lastPageIndex);
  }, [countries, currentPage]);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <CountriesContainer>
        <CountriesWrapper>
          {currentData.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </CountriesWrapper>
      </CountriesContainer>
      <Pagination
        currentPage={currentPage}
        totalCount={countries.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      ></Pagination>
    </>
  );
};

export default CountriesList;
