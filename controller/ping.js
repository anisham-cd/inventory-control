let Utilsping=require('../utils/ping');
let responseBuilder=require('../helper/responseBuilder');
function ping(request,response){
    let data=Utilsping.ping(request.query.number)
    
    response.send(responseBuilder.success({
        "message":"Square of a number",
        "number":request.query.number,
        "square":data
    

    }));
}
        
module.exports={
    ping
}


