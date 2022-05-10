const express=require('express');
const shopController=require('../controller/controllerShop');
const employeeController=require('../controller/employee');
//const medicine=require('./src/routes/allRoutes/medicine');
const employee=require('./allRoutes/employees');
const shop=require('./allRoutes/routeShop');



const router=express.Router();
//router.use('/godown',godown);
//router.use('/medicine',medicine);
router.use('/employee',employee);

router.use('/shop',shop);

module.exports=router;


