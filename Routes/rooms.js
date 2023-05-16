const express = require('express');
const router = express.Router();

const controller = require('../Controllers/rooms')

exports.router = router
    .post('/property', controller.createProperty)
    .get('/property/all', controller.getAllProperty)
    .get('/property/:id', controller.getPropertybyId)
    .put('/property/:id', controller.updateProperty)
    .delete('/property/:id', controller.deletePropertyById)

