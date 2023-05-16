const model = require('../Models/rooms');

const Property = model.property;
const currentDate = new Date().toUTCString();

exports.createProperty = async (req, res) => {
    req.body.createdOn = currentDate
    req.body.lastUpdate = currentDate


    const property = new Property(req.body);


    let error;
    try {
        await property.save()
        res.status(200).send(property)
    } catch (err) {
        console.log(err)
    }
}

exports.getAllProperty = async (req, res) => {

    const property = await Property.find();
    res.status(201).send(property)

}
exports.getPropertybyId = async (req, res) => {

    const _id = req.params.id;


    try {
        property = await Property.findById(_id);
        res.status(201).send(property);
    } catch (error) {
        res.status(400).send(error)
    }

}

exports.updateProperty = async (req, res) => {
    const _id = req.params.id;

    var newData = {
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pinCode: req.body.pinCode,

        phone: req.body.phone,
        email: req.body.email,

        numberOfRooms: req.body.numberOfRooms,
        tarrif: req.body.tarrif,
        images: req.body.images,
        lastUpdate: currentDate
    }

    try {
        await Property.findByIdAndUpdate(_id, newData);
        res.status(200).send(newData)
    } catch (error) {
        res.status(400).send(error)

    }
}

exports.deletePropertyById = async (req, res) => {
    const _id = req.params.id;

    try {
        await Property.findByIdAndDelete(_id)
        res.status(200).send(`Property with _id: ${_id} deleted..`)
    } catch (error) {
        res.status(400).send(error)
    }
}