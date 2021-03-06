const express=require('express');
const ping=require('./controller/ping');
const routes=require('./router/routes');
const app=express();
const port=process.env.PORT ||3004;
var bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use('/api/v1',routes);
app.get('/ping',ping.ping)

app.listen(port,console.log(`server is running in port no ${port}`))
