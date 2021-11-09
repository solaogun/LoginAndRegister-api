const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: [true, 'please write your username'],
            min: 3,
            max: 20,
            index: true,
            unique: true
        },
        email: {
            type: String,
            require: [true, 'please enter your email'],
            max: 50,
            index: true,
            unique: true
        },
        password: {
            type: String,
            require: [true, 'please enter your password'],
            min: 6
        },
        surname: {
            type: String,
            default: ""

        },
        otherNames: {
            type: String,
            default: ""

        },
        phoneNumber: {
            type: Number,
            default: ""

        }

    }
)

module.exports = mongoose.model("User", UserSchema);
