const mongoose = require('mongoose');

// Requires config then uses config to retreive value of mongoURI
const config = require('config');
const db = config.get('mongoURI');

// Creates async/await function to connect to mongoDB using mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);

        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;