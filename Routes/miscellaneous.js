const express = require('express');
const Controller = require('../Controllers/miscellaneous');
const router = express.Router();


exports.router = router
    .get('/city', Controller.getCity)
    .get('/city/:state', Controller.getCitiesByState)
    .get('/state', Controller.getState)
