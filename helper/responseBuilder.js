function responseBuilder(data){
    let value={
        "code":200,
        "message":"request was successfull",
        "data":data
    }
    return value;
}
function errorMessage(msg){
        let value={
            "code":202,
            "message":msg
        }
        return value;
    }
module.exports={
    responseBuilder,
    errorMessage
}