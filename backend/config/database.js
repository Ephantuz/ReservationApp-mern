const mongoose = require('mongoose')

const connectDatabase = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB)
        console.log(`MongoDb connected: ${conn.connection.host}`.bgYellow.underline)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}