const {
  getCountries,
  getCountryById,
  getCountriesByName,
} = require("../services/countries.services");

const getCountriesController = async (req, res) => {
  try {
    const countries = await getCountries();
    res.json(countries);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getCountryByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await getCountryById(id);
    if (!country) {
      throw new Error("Country not found");
    }
    res.json(country);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getCountriesByNameController = async (req, res) => {
  try {
    const { name } = req.params;
    const countries = await getCountriesByName(name);
    if (!countries) {
      throw new Error("Country not found");
    }
    res.json(countries);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCountriesController,
  getCountryByIdController,
  getCountriesByNameController,
};
