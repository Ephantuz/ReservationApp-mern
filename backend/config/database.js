const mongoose = require('mongoose')

const connectDatabase = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB)
        console.log(`MongoDb connected: ${conn.connection.host}`.bgWhite.underline)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDatabase