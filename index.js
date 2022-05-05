const express=require('express');
const ping=require('./controller/ping');
const routes=require('./router/routes');
//const routers = require('./src/routes/routes');
//const responseBuilder=require('../helper/responseBuilder')


//const godown=require('./src/controller/godown/godown');
const app=express();
const port=process.env.PORT ||3003
var bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use('/api/v1',routes);
app.get('/ping',ping.ping)

app.listen(port,()=>{
    console.log(`server is running in port no ${port}` )
})
