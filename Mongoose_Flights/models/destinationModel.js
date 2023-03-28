const mongoose = require('mongoose');
const Schema = mongoose.Schema

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    // required: true,
  },
  arrival: {
    type: Date,
    // required: true,
  },
});
const Destination = mongoose.model('Destination',destinationSchema)
module.exports = Destination;
