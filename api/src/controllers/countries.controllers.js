const { getCountries } = require("../services/countries.services");

const getCountriesController = async (req, res) => {
  try {
    const countries = await getCountries();
    res.json(countries);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getCountriesController };
