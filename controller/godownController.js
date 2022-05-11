let utilsPing=require('../utils/ping');
let utilsGodown=require('../utils/godown');


function list(request,response){
    let data=utilsGodown.list(request.body)
    response.send(data)
}
function push(request,response){
    //console.log(request)
    let data=utilsGodown.push1(request.body)
    //console.log(data)
    response.send(data)

}
function listByName(request,response){
    let data=utilsGodown.listByName(request.body)
    response.send(data)
    //console.log(data)
}
module.exports={
    list,
    push,
    listByName
}