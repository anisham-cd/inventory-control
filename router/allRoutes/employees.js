const express=require('express');
const employeeController=require('../../controller/employee');
const router=express.Router();
//let responseBuilder = require('../../helper/responseBuilder');
//let constant=require('../../helper/constant');
const middlewaresEmp=require('../../middlewares/midEmployee')


router.post('/signUp',middlewaresEmp.signupValidator,employeeController.signUp)
router.get('/list',employeeController.list)
router.post('/push',employeeController.push)
router.get('/listByName',employeeController.listByName)
module.exports=router
