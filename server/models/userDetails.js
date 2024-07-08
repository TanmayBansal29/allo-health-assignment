const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        }
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        length: 5
    }
});

module.exports = mongoose.model('user', userSchema);