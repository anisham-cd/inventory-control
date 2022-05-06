let utilsPing=require('../utils/ping');
let utilsEmployee=require('../utils/employee');


function signUp(request,response){
    let data=utilsEmployee.push1(request.body)

    console.log(data)
    response.send(data)
}
function list(request,response){
    let data=utilsEmployee.list(request.body)
    response.send(data)
}
function push(request,response){
    //console.log(request)
    let data=utilsEmployee.push1(request.body)
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
    listByName,
    signUp
}