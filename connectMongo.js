const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_CONNECT_URI)
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed")
    }
}

module.exports = connectDB