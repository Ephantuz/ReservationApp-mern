const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000





const app = express()



// locate routes and render them
app.use('/api/reservations', require('./routes/reservationRoutes'))


// app listening on port 8080
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})