let responseBuilder=require('../helper/responseBuilder')
 function ping(number){
    let square=number*number;
   
    let data={
      "number":number,
      "square":square
    }
    let name=responseBuilder.responseBuilder(data)
    return name;
  }
   module.exports={
       ping,
       
   }