const Destinations = require('../models/destinationModel')
const Flights = require('../models/flightModel')

module.exports.index = async function (req, res){
  const flights = await Flights.find()
  .sort({departs:1})
  res.render('index', {flights})
}

module.exports.new = async function (req, res) {
  const newFlight = new Flights()
  const dt = newFlight.departs
  const departsDate = dt.toISOString().slice(0, 16)
  res.render('new', {departsDate})
}

module.exports.create = async function (req, res) {
      try{
          await Flights.create(req.body)
          res.redirect('/flights')
      }
      catch(err){
        console.log(err.message)
      }
}

module.exports.show = async function (req, res) {
  const flight = await Flights.findById(req.params.id).populate({
    path:'destinations', options:{
      sort:{'arrival':1}
    }
  })
  const newFlight = new Flights()
  const dt = newFlight.departs
  const departsDate = dt.toISOString().slice(0, 16)
  res.render('show', {flight, departsDate})
}

module.exports.delete = async function(req, res) {
  const flight = await Flights.findByIdAndDelete(req.params.id)
  await Destinations.deleteMany({_id:{
    $in: flight.destinations
  }})
  res.redirect('/flights')
}

// destinations

module.exports.createDestination = async function (req, res) {
  const destination = await Destinations.create(req.body)
  await Flights.findByIdAndUpdate(req.params.id, {
    $push:{
      destinations: destination.id
    }
  })
  res.redirect(`/Flights/${req.params.id}`)
}
