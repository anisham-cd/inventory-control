let utilsPing=require('../utils/ping');
let utilsEmployee=require('../utils/employee');
function ping(request,response){
    let data=utilsPing.ping(request.query.number)
    response.send(data)
}
function push(request,response){
    
    let data=utilsEmployee.push(request.body)
    console.log(data)
    response.send(data)
    // response.send({
    // message:"data added successfully",
    // data
// });
}
function listByName(request,response){
    let data=utilsEmployee.listByName(request.query.name)
    response.send(data)
}
module.exports={
    ping,
    push,
    listByName
}