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
    function checkAdminRoles(req,res,next){
        let body=req.body;
        if (!body.authToken){
            let resp=responseBuilder.error(constant.data)
            res.send(resp)
        }
        else{
            let data=JSON.parse(common.decrypt(body.authToken))
            if(data.role!='admin')
            {
                let resp=responseBuilder.error(constant.userLogin.authorizationFailed)
                res.send(resp)
            }
            else
            next();
        }

    }
    
module.exports={
    decrypt,
    checkAdminRoles
}