const { Country } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const saveCountriesFromApi = async () => {
  try {
    const url = "https://restcountries.com/v3/all";
    const response = await axios.get(url);

    // response.data.forEach(async (country) => {
    //   console.log(country.capital);
    // });
    const countries = response.data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        image: country.flags[0],
        continent: country.region,
        subregion: country.subregion,
        capital: country.capital ? country.capital[0] : "",
        population: country.population,
        area: country.area,
      };
    });

    await Country.bulkCreate(countries);
  } catch (error) {
    console.log(error);
  }
};

const getCountries = async () => {
  try {
    const countries = await Country.findAll({
      attributes: ["id", "name", "image", "continent"],
    });
    return countries;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveCountriesFromApi, getCountries };
