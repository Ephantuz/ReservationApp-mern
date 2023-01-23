const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name'],

    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please type in your password'],
    }
},
    {
        timestamps: true
    }
)



module.exports = mongoose.model('user', userSchema)