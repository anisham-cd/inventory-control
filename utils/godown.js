let responseBuilder = require('../helper/responseBuilder');
let constant=require('../helper/constant');
let shop=require('../docs/shop.json');
function push1(body){
    body["id"]=godown+length+1;
    body.name=body.name.charAt(0).toUpperCase()+body.name.substring(1);

godown.push(body)
let value=JSON.stringify(godown,null,2);
let resp=responseBuilder.addData(value,('../docs/shop.json'));
console.log(resp);
return resp;
}
function listByName (body){
    

}