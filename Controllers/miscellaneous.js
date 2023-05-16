const Model = require('../Models/miscellaneos')

const City = Model.City;
const State = Model.State;

exports.getCity = async (req, res) => {
    const mh = 'Maharashtra'
    const city = await City.find({ state: mh }, 'name')
    res.status(201).send(city);
}

exports.getState = async (req, res) => {
    const state = await State.find()
    res.status(201).send(state);
}

exports.getCitiesByState = async (req, res) => {
    const state = req.params.state;
    try {
        const city = await City.find({ 'state': state })
        res.status(201).send(city)
    } catch (error) {
        res.status(400).send(error)
    }
}