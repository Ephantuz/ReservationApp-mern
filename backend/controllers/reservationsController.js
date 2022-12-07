const asyncHandler = require('express-async-handler')
const Reservation = require('./../models/reservationsModel')



// get clients reservations
const getAllReservations = asyncHandler(async (req, res) => {
    const reservations = await Reservation.find()
    res.status(200).json(reservations);
})

// create new reservations
const createNewReservation = asyncHandler(async (req, res) => {
    if (!req.body.text) {

        res.status(201).json({
            message: 'Please add a test field'
        })
    }
    const reservation = await Reservation.create({
        text: req.body.text,
        // user: req.user.id
    })

    res.status(201).json(reservation)
})

// update reservations
const updateReservation = asyncHandler(async (req, res) => {
    res.status(201).json({
        message: 'Updated reservation'
    })
})

// delete reservations
const deleteReservation = asyncHandler(async (req, res) => {
    res.status(201).jason({
        message: 'deleted a reservation'
    })
})



module.exports = {
    getAllReservations,
    createNewReservation,
    updateReservation,
    deleteReservation
}