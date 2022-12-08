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


// locate routes and render them
app.use('/api/reservations', require('./routes/reservationRoutes'))


// error handler middleware
app.use(errorHandler)

// app listening on port 8080
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})