const { emailVerification } = require("./responseBuilder");

let baseSuccess="The file has been fetched";
let baseError="Error has occured";
let alreadyExist="value is already exist";
let invalid="The given data is not sufficient,provide the neccessary data ";
let emailVal="Email already exist";
authorizationFailed:" Authorization has Failed"
    
let emailVerify={
    verified:"email verified successfully",
    verificationFailed:"verification failed"
}
let userLogin={
    userDoesnotExist:"The user does not exist",
    userpassDontMatch:"User password does not match",
    roleAssigned:"The user role hhas been assigned",
    authorizationFailed:" Authorization has Failed"
    
}
module.exports={
    success:baseSuccess,
    error:baseError,
    value:alreadyExist,
    data:invalid,
    user:userLogin,
    value1:emailVal,
    verify:emailVerify,
    authorization: "authorizationFailed"
    
}
