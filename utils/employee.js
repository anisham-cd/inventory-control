let responseBuilder = require('../helper/responseBuilder');
let employee=[];
function push(body){
    body['id']=employee.length+1;
    employee.push(body);
    let resp=responseBuilder.responseBuilder(employee)
    return resp;
}
function listByName(body){
    let result=[];
    for(let elem of employee){
        if(elem.name.toLowerCase()==body.name.toLowerCase())
        result.push (elem);
    }
    let resp=responseBuilder.responseBuilder(result)
    return resp;

}
function list(body){
   let result=[];
    for(let elem of employee){
        if(body.name){
            if(elem.name.toLowerCase()==body.name.toLowerCase())
             result.push(elem)
        }
        else if(body.location){
        if(elem.location.toLowerCase()==body.location.toLowerCase())
            result.push(elem)
        }
        else if(body.age){
            if(elem.age==body.age)
              result.push(elem)
        }     
        else if(body.id){
            if(elem.id==body.id)
             result.push(elem)
        }
    }
    let resp=responseBuilder.responseBuilder(result)
    return resp;
}
module.exports={
    
    push,
    listByName,
    list
}