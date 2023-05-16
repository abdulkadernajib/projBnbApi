const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({

    name: { type: String, required: true },

    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: Number, required: true },

    phone: { type: Number, required: true },
    email: { type: String, required: true },

    numberOfRooms: { type: Number, required: true },
    availableRooms: { type: Number, },
    tarrif: { type: Number },
    images: [String],
    createdOn: { type: Date },
    lastUpdate: { type: Date }
})

exports.property = mongoose.model('properties', propertySchema)