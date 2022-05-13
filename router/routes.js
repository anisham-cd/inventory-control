const express=require('express');
const router=express.Router();
const shopController=require('../controller/controllerShop');
const employeeController=require('../controller/employee');
const godownController=require('../controller/godownController');
const employee=require('./allRoutes/employees');
const shop=require('./allRoutes/routeShop');
const godown=require('./allRoutes/routeGodown');

router.use('/godown',godown);
router.use('/employee',employee);
router.use('/shop',shop);

module.exports=router;


