const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required!."]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required.!"]
    },
    password: {
        type: String, 
        required: [true, "Password is required.!"]
    },
    mobileNo: {
        type: String,
        required: [true, "Mobile No. is required.!"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    rfidBadgeNumber: {
        type: String,
    },
    createdOn: {
        type: Date,
        default: new Date()
    }

})

module.exports = mongoose.model("User", userSchema);