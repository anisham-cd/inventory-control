const express=require('express');
const employeeController=require('../../controller/employee');
const router=express.Router();
const middlewaresEmp=require('../../middlewares/midEmployee');
const commonmiddlewares=require('../../middlewares/midcommon');


router.post('/signUp',commonmiddlewares.decrypt,middlewaresEmp.signupValidator,employeeController.signUp);
router.post('/login',commonmiddlewares.decrypt,middlewaresEmp.loginValidator,employeeController.login);

router.get('/list',employeeController.list)
router.post('/push',employeeController.push)
router.get('/listByName',employeeController.listByName)

router.post('/encrypt',employeeController.encrypt)
router.post('/decrypt',employeeController.decrypt)
module.exports=router
