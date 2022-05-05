let utilsPing=require('../utils/ping');
let utilsEmployee=require('../utils/employee');
function list(request,response){
    let data=utilsEmployee.list(request.body)
    response.send(data)
}
function push(request,response){
    //console.log(request)
    let data=utilsEmployee.push(request.body)
    console.log(data)
    response.send(data)

}
function listByName(request,response){
    let data=utilsEmployee.listByName(request.body)
    response.send(data)
}
module.exports={
    list,
    push,
    listByName
}