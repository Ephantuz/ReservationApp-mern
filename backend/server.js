const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDatabase = require('./config/database')
const {errorHandler} = require('./middlewares/errorMiddleware')

// database callback
connectDatabase()

// start express application
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// locate routes for reservation and render them from controllers 
app.use('/api/reservations', require('./routes/reservationRoutes'))

// locate user routes and authentication and render them from controllers
app.use('/api/user', require('./routes/userRoutes'))


// error handler middleware
app.use(errorHandler)

// app listening on port 8080
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})