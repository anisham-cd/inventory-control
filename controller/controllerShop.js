let utilsPing=require('../utils/ping');
let utilsShop=require('../utils/shop');


function list(request,response){
    let data=utilsShop.list(request.body)
    response.send(data)
}
function push(request,response){
    //console.log(request)
    let data=utilsShop.push1(request.body)
    //console.log(data)
    response.send(data)

}
function listByName(request,response){
    let data=utilsShop.listByName(request.query)
    response.send(data)
}
module.exports={
    list,
    push,
    listByName
}