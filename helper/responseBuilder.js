const fs=require("fs")

function addData(data,path){
    fs.writeFile(path,data,'utf8',(err)=>{
        if(err){
            console.log(err);
        }
        return data;
    })
    return data;
    }
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
function error(body){
        let value={
            "code":400,
            "message":"signUp failed",
            "data":body
        }
        return value;
    }

module.exports={
    responseBuilder,
    errorMessage,
    error,
    addData
}