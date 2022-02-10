import React from "react";
import { Card, CardImg, CardH1, CardH2 } from "./CountryCardElements";

const CountryCard = ({ country }) => {
  return (
    <>
      <Card>
        <CardImg src={country.image} />
        <CardH1>{country.name}</CardH1>
        <CardH2>{country.continent}</CardH2>
      </Card>
    </>
  );
};

export default CountryCard;
