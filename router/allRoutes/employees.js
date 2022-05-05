const express=require('express');
const employeeController=require('../../controller/employee');
const router=express.Router();
router.get('/list',employeeController.ping)
router.post('/push',employeeController.push)
router.get('/listByName',employeeController.listByName)
module.exports=router
