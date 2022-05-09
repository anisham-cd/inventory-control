let responseBuilder = require('../helper/responseBuilder');
let constant=require('../helper/constant');
let common=require('../helper/common');
let employee=require('../docs/employee.json');

 //let employee=[];
function signUp(body){
    
    employee.push(body)
    let resp=responseBuilder.error(body)
    return resp;
}
function login(body){
    if (!body.email||!body.password){
        let resp=responseBuilder.responseBuilder(body)
    return resp;
    }
    let userFlag=0;

    for(let elem of employee){
        if(elem.email==body.email){
            userFlag=1;
        }
        if(elem.email==body.email && elem.password==body.password)
        {
            let resp=responseBuilder.responseBuilder(elem)
            return resp;

        }
      

   }
        if(userFlag==1){
            let resp=responseBuilder.responseBuilder(constant.user.userpassDontMatch)
        return resp;
        }
        else{
            let resp=responseBuilder.responseBuilder(constant.user.userDoesnotExist)
            return resp;
        }
        let resp=responseBuilder.responseBuilder(constant.user.userDoesnotExist)
        return resp;

       
    }

    
 
function push1(body){
    body["id"]=employee.length+1;
    body['name']=body.name.charAt(0).toUpperCase()+body.name.substring(1);
    //body['hobby']=body.hobby.charAt(0).toUpperCase()+body.hobby.substring(1);
    employee.push(body);
    console.log(employee)
    let value=JSON.stringify(employee,null,2);
    let resp=responseBuilder.addData(value,'docs/employee.json');
    console.log(resp)
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
function encrypt(body){
    let encryptedData=common.encrypt(JSON.stringify(body))
    let resp=responseBuilder.responseBuilder(encryptedData)
    return resp;
}
function decrypt(body){
    let decryptedData=common.decrypt(body.encryptedData)
    let resp=responseBuilder.responseBuilder(JSON.parse(decryptedData))
    return resp;
}

module.exports={
    
    push1,
    listByName,
    list,
    signUp,
    login,
    encrypt,
    decrypt
}