const asyncHandler = require('express-async-handler')
const Reservation = require('./../models/reservationsModel')
const User = require('../models/userModel')



// get clients reservations

// also,mongodb collection name is enerated here e.g like for  this one, it's ***reservations***---------------------------
const getAllReservations = asyncHandler(async (req, res) => {
    const reservations = await Reservation.find({user: req.body.id})
    res.status(200).json(reservations);
})

// create new reservations
const createNewReservation = asyncHandler(async (req, res) => {
    if (!req.body.text) {

        res.status(400)
        throw new Error('Please add a text field!')
    }
    const reservation = await Reservation.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(201).json(reservation)
})

// update reservations
const updateReservation = asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.params.id)
    if(!reservation){
        res.status(400)
        throw new Error('No reservation found')
    }
    
})

// delete reservations
const deleteReservation = asyncHandler(async (req, res) => {
    res.status(201).json({
        message: 'deleted a reservation'
    })
})



module.exports = {
    getAllReservations,
    createNewReservation,
    updateReservation,
    deleteReservation
}