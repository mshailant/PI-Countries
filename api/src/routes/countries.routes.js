const express = require('express');
const router = express.Router();
const { getCountriesController } = require('../controllers/countries.controllers');

router.get('/', getCountriesController);

module.exports = router;