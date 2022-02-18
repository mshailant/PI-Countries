import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountry } from "../../actions";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Column2,
  ImgWrap,
  Img,
  Subtitle,
  TitleActivity,
} from "./CountryDetailsElements";
import {
  ActivitiesContainer,
  Card,
  ActivitiesWrapper,
  CardH1,
  CardH2,
} from "./ActivitiesElements";

const CountryDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const country = useSelector((state) => state.country);

  console.log(params);
  useEffect(() => {
    dispatch(getCountry(params.id));
  }, [dispatch, params.id]);

  console.log(country.activities);

  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <TitleActivity>{country.name}</TitleActivity>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <Subtitle>Code: {country.id}</Subtitle>
                <Subtitle>Continent: {country.continent}</Subtitle>
                <Subtitle>Capital: {country.capital}</Subtitle>
                <Subtitle>Subregion: {country.subregion}</Subtitle>
                <Subtitle>Population: {country.population}</Subtitle>
                <Subtitle>Area: {`${country.area} km²`}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={country.image} alt={country.name} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      {country.activities?.length > 0 && (
        <TitleActivity>Activities</TitleActivity>
      )}
      {country.activities?.length > 0 && (
        <ActivitiesContainer>
          <ActivitiesWrapper>
            {country.activities?.map((activity) => {
              return (
                <Card key={activity.id}>
                  <CardH1>{activity.name}</CardH1>
                  <CardH2>Difficulti: {activity.difficulty}</CardH2>
                  <CardH2>Duration: {activity.duration}</CardH2>
                  <CardH2>Season: {activity.season}</CardH2>
                </Card>
              );
            })}
          </ActivitiesWrapper>
        </ActivitiesContainer>
      )}
    </>
  );
};

export default CountryDetails;
