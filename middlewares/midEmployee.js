let responseBuilder = require('../helper/responseBuilder');
let constant=require('../helper/constant');
let employee=[];
    function signupValidator(req,res,next){
        let body=req.body;
        if (!body.name||!body.dob||!body.password||!body.email){
            let resp=responseBuilder.error(constant.data)
            res.send(resp)
        }
        else
        next();
    
    }
    
module.exports={
    signupValidator
}