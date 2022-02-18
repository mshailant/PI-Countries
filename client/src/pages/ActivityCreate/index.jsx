import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../actions";
import validateInfo from "./validation";
import {
  Container,
  Form,
  FormContent,
  FormInput,
  FormLabel,
  FormTitle,
  FormWrap,
  FormButton,
  Text,
  FormSelect,
  SelectedButton,
} from "./ActivityCreateElements";
import { createActivity } from "../../actions";

const ActivityCreate = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [values, setValues] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: new Set(),
    countries: new Set(),
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    if (name === "season") {
      setValues({
        ...values,
        [name]: values.season.add(value),
      });
    } else if (name === "countries") {
      setValues({
        ...values,
        [name]: values.countries.add(value),
      });
    } else {
      setValues({ ...values, [name]: value });
    }
    // setErrors(validateInfo(values));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let err = validateInfo(values);
    setErrors(err);
    if (Object.keys(validateInfo(values)).length === 0) {
      dispatch(createActivity(values));
    }
  };

  const deleteSeason = (season) => {
    let newSeasons = values.season;
    newSeasons.delete(season);
    setValues({
      ...values,
      season: newSeasons,
    });
  };

  const deleteCountry = (country) => {
    let newCountries = values.countries;
    newCountries.delete(country);
    setValues({
      ...values,
      countries: newCountries,
    });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit} noValidate>
              <FormTitle>Create Activity</FormTitle>
              <FormLabel>Name</FormLabel>
              <FormInput
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
              />
              {errors.name && <Text>{errors.name}</Text>}
              <FormLabel>Difficulty</FormLabel>
              <FormSelect
                key={"difficulty"}
                name="difficulty"
                onChange={handleChange}
                defaultValue={0}
              >
                <option value={0} disabled>
                  --Chose One--
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </FormSelect>
              {errors.difficulty && <Text>{errors.difficulty}</Text>}
              <FormLabel>Duration</FormLabel>
              <FormInput
                name="duration"
                type="text"
                placeholder="Duration"
                onSelect={handleChange}
              />
              {errors.duration && <Text>{errors.duration}</Text>}
              <FormLabel>Season</FormLabel>
              <FormSelect
                key={"season"}
                name="season"
                defaultValue="season"
                onChange={handleChange}
              >
                <option value="season" disabled>
                  --Chose One--
                </option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
              </FormSelect>
              {errors.season && <Text>{errors.season}</Text>}
              {values.season.size > 0 &&
                Array.from(values.season).map((season) => (
                  <SelectedButton
                    onClick={() => deleteSeason(season)}
                    key={season}
                  >
                    {season}
                  </SelectedButton>
                ))}
              <FormLabel>Countries</FormLabel>
              <FormSelect
                name="countries"
                defaultValue="---"
                onChange={handleChange}
              >
                <option value="---" disabled>
                  --Chose One--
                </option>
                {countries?.map((country) => (
                  <option value={country.id}>{country.name}</option>
                ))}
              </FormSelect>
              {errors.countries && <Text>{errors.countries}</Text>}
              {values.countries.size > 0 &&
                Array.from(values.countries).map((country) => (
                  <SelectedButton
                    onClick={() => deleteCountry(country)}
                    key={country}
                  >
                    {countries.find((contry) => contry.id === country).name}
                  </SelectedButton>
                ))}
              <FormButton type="submit">Create</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ActivityCreate;
