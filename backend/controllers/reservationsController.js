const asyncHandler = require('express-async-handler')



// get clients reservations
const getAllReservations = asyncHandler(async(req, res) =>{
    res.status(201).json({
        message: 'Get all clients reservations'
    })
})

const createNewReservation = asyncHandler(async(req, res) =>{
    res.status(201).json({
        message: 'New reservation created'
    })
})

const updateReservation = asyncHandler(async(req, res) =>{
    res.status(201).json({
        message: 'Updated reservation'
    })
})

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