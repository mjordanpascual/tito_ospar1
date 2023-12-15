const User = require('../models/Users')

module.exports.registerUser = (reqBody) => {
    
    let newUser = new User({
        firstName : reqBody.firstName,
        lastName : reqBody.lastName,
        email : reqBody.email,
        password : reqBody.password,
        mobileNo : reqBody.mobileNo,
        rfidBadgeNumber : reqBody.rfidBadgeNumber
    })

    return newUser.save()
    .then((user, error) => {
        if(error) {
            // return (console.log("Error inserting data in Database!"));
            return false;
        } else {
            // return (console.log("Successfully created New User!"));
            return true;
        }
    })


}