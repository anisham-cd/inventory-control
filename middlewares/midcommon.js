let responseBuilder = require('../helper/responseBuilder');
let constant=require('../helper/constant');
let common=require('../helper/common')

    function decrypt(req,res,next){
        let body=req.body;
        if (!body.encryptedData){
            let resp=responseBuilder.error(constant.data)
            res.send(resp)
        }
        else{
            req.body=JSON.parse(common.decrypt(body.encryptedData))

            next();
        }
       
    
    }
    
module.exports={
    decrypt
}