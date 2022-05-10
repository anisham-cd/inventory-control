let responseBuilder = require('../helper/responseBuilder');
let constant=require('../helper/constant');
//let common=require('../helper/common');
let shop=require('../docs/shop.json');
function push1(body){
    body["id"]=shop.length+1;
    //for(let elem of employee)
      //if(elem.email==body.email){
        //let resp=responseBuilder.responseBuilder(constant.value)
        //return resp;
  
      
      body['name']=body.name.charAt(0).toUpperCase()+body.name.substring(1);
    //body['hobby']=body.hobby.charAt(0).toUpperCase()+body.hobby.substring(1);
    shop.push(body);
    //console.log(shop)
    let value=JSON.stringify(shop,null,2);
    let resp=responseBuilder.addData(value,'docs/shop.json');
    console.log(resp)
    return resp;
}
function listByName(body){
    let result=[];
    for(let elem of shop){
        if(body.name){
        if(elem.name.toLowerCase()==body.name.toLowerCase())
        result.push (elem);
    }
        else if(body.location){
        if(elem.location.toLowerCase()==body.location.toLowerCase())
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
function list(body){
   let result=[];
    for(let elem of shop){
        if(body.name){
            if(elem.name.toLowerCase()==body.name.toLowerCase())
             result.push(elem)
        }
        else if(body.location){
        if(elem.location.toLowerCase()==body.location.toLowerCase())
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
    push1,
    listByName,
    list
}