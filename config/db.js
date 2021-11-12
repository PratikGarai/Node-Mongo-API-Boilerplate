const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDb connected:  ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.log(`Error connecting to mongo : ${err}`.red.bold);
        process.exit(1);
    }
}

module.exports = connectDb;