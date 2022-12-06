const express = require('express')
const router  = express.Router()

const {
    getAllReservations,
    createNewReservation,
    updateReservation,
    deleteReservation
} = require('./../controllers/reservationsController')



//  created  routes for the reservation app.
router.get('/', getAllReservations)
router.post('/', createNewReservation)
router.put('/', updateReservation)
router.post('/', deleteReservation)

module.exports = router