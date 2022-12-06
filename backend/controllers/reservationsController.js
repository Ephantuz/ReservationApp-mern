const asyncHandler = require('express-async-handler')



// get clients reservations
const getAllReservations = asyncHandler(async(req, res) =>{
    res.status(201).json({
        message: 'Get all clients reservations'
    })
})

// create new reservations
const createNewReservation = asyncHandler(async(req, res) =>{
    res.status(201).json({
        message: 'New reservation created'
    })
})

// update reservations
const updateReservation = asyncHandler(async(req, res) =>{
    res.status(201).json({
        message: 'Updated reservation'
    })
})

// delete reservations
const deleteReservation = asyncHandler(async(req, res) =>{
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