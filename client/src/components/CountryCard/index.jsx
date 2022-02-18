import React from "react";
import { Card, CardImg, CardH1, CardH2, CardLink } from "./CountryCardElements";

const CountryCard = ({ country }) => {
  return (
    <>
      <CardLink to={`/countries/${country.id}`}>
        <Card>
          <CardImg src={country.image} />
          <CardH1>{country.name}</CardH1>
          <CardH2>{country.continent}</CardH2>
        </Card>
      </CardLink>
    </>
  );
};

export default CountryCard;
