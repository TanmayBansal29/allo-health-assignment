const mongoose = require('mongoose');
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL

exports.connect = () => {
    mongoose.connect(DATABASE_URL)
    .then(() => {
        console.log("Database Connected!!");
    })
    .catch((error) => {
        console.log("Database Connection Failed!!")
        console.log(error)
        process.exit(1);
    })
}