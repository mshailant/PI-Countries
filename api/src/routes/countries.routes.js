const express = require("express");
const router = express.Router();
const {
  getCountriesController,
  getCountryByIdController,
  getCountriesByNameController,
} = require("../controllers/countries.controllers");

router.get("/", getCountriesController);
router.get("/:id", getCountryByIdController);
router.get("/:name", getCountriesByNameController);

module.exports = router;
