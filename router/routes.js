const express=require('express');
//const godown=require('../controller/godown/godown');
//const medicine=require('./src/routes/allRoutes/medicine');
const employee=require('./allRoutes/employees');

const router=express.Router();
//router.use('/godown',godown);
//router.use('/medicine',medicine);
router.use('/employee',employee);

module.exports=router;


