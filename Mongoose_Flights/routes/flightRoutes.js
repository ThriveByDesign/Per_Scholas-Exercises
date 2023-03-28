const express = require('express')
const router = express.Router()
const flightController = require('../controllers/flightController')

router.get('/', flightController.index)
router.get('/new', flightController.new)
router.delete('/:id', flightController.delete)
router.post('/', flightController.create)
router.get('/:id', flightController.show)
router.post('/:id/destinations', flightController.createDestination)
module.exports = router;




