let responseBuilder = require('../helper/responseBuilder');
let fs=require('fs')
let constant=require('../helper/constant');
let common=require('../helper/common');
let employee=require('../docs/employee.json');
const { networkInterfaces } = require('os');
//const res = require('express/lib/response');

//let employees=[{
  //  "id":1,
    //"name":"mandatory",
     //"role":"",
     //"dob":"04-04-1989",
     //"password":"mandatory",
     //"step":1,
     //"email": "mandatory@gmail.com",
      //"hobby":"optional"

 //}];
function signUp(body){
    body.role="user";
    body.id=employee.length+1;
    employees.push(body)
    let resp=responseBuilder.responseBuilder(body)
    return resp;
}
function login(body){
  // console.log(body)
    let userFlag=0;

    for(let elem of employee){
        if(elem.email==body.email){
            userFlag=1;
        }
       
        if(elem.email==body.email && elem.password==body.password)
       
        {
            let token=common.encrypt(JSON.stringify({
                role:elem.role,
                exp:Date.now()+(30*1000)
        }))
            let res={
                data:elem,
                AuthToken: token
               
            }
        
               // console.log(res)
            
                let resp=responseBuilder.responseBuilder(res)
                return resp;
        }
        }
        
        
         //  let resp=responseBuilder.responseBuilder(data)
           // return resp;
    

    
      
       if(userFlag==1){
            let resp=responseBuilder.responseBuilder(constant.user.userpassDontMatch)
            return resp;
       }
        else{
            let resp=responseBuilder.responseBuilder(constant.user.userDoesnotExist)
            return resp;
        }
}
 function push1(body){
    body["id"]=employee.length+1;
    for(let elem of employee)
      if(elem.email==body.email){
        let resp=responseBuilder.responseBuilder(constant.value1)
        return resp;
  
      }
    body['name']=body.name.charAt(0).toUpperCase()+body.name.substring(1);
    body['role']=body.role.charAt(0).toUpperCase()+body.role.substring(1);
    body['hobby']=body.hobby.charAt(0).toUpperCase()+body.hobby.substring(1);


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
        if(body.name){
            if(elem.name.toLowerCase()==body.name.toLowerCase())
                result.push (elem);
         }
        else if(body.role){
            if(elem.role.toLowerCase()==body.role.toLowerCase())
                result.push (elem);
        }
        else if(body.hobby){
            if(elem.hobby.toLowerCase()==body.hobby.toLowerCase())
                result.push (elem);
        }
        if(body.email){
            if(elem.email==body.email)
                result.push (elem);
         }
         if(body.shopName){
            if(elem.shopName.toLowerCase()==body.shopName.toLowerCase())
                result.push (elem);
         }
         if(body.shopId){
            if(elem.shopId==body.shopId)
                result.push (elem);
         }
    }
    let resp=responseBuilder.responseBuilder(result)
    return resp;
}

function list(query){
   let result=[];
    for(let elem of employee){
        if(query.name){
            if(elem.name.toLowerCase()==query.name.toLowerCase())
             result.push(elem)
        }
        else if(query.role){
            if(elem.role.toLowerCase()==query.role.toLowerCase())
             result.push(elem)
        }
        else if(query.location){
        if(elem.location.toLowerCase()==query.location.toLowerCase())
            result.push(elem)
        }
        else if(query.age){
            if(elem.age==query.age)
              result.push(elem)
        }     
        else if(query.id){
            if(elem.id==query.id)
             result.push(elem)
        }
        else if(query.shopId){
            if(elem.shopId==query.shopId)
             result.push(elem)
        }
        else if(query.shopName){
            if(elem.shopName.toLowerCase()==query.shopName.toLowerCase())
             result.push(elem)
        }
        else if(query.email){
            if(elem.email==query.email)
             result.push(elem)
             let resp=responseBuilder.responseBuilder(constant.value1)
             return resp;
        }

    }
    let resp=responseBuilder.responseBuilder(result)
    return resp;
}

function employeeRole(body){
    let id=body.id;
    let role=body.role;
    for (let elem of employee){
         if(elem.id==id){
            elem.role=role;
            let data=JSON.stringify(employee,null,2)
            fs.writeFile('docs/employee.json',data,'utf8',(err)=>{
                if(err){
                    console.log(err);
                }})
            let res={
                email:elem.email,
                role:role
            } 
            
            let resp=responseBuilder.responseBuilder(res)
            return resp;
        } 
}  
    let resp=responseBuilder.error(constant.user.authorizationFailed);
    return resp;
}
   
        
  //  let resp=responseBuilder.responseBuilder(result)
    //    return resp;
    
    
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
    employeeRole,
    //isValidEmail,
    signUp,
    login,
    encrypt,
    decrypt
}