const { default: mongoose, mongo } = require("mongoose")

const reservationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    info: {
        type: String,
        required: [true, 'please add a reservation']

    }
},
    {
        timestamps: true,
    }
)



module.exports = mongoose.model('Reservation', reservationSchema)