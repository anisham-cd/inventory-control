const express=require('express');
const shop=require('../../controller/controllerShop');
const router=express.Router();
//const middlewaresEmp=require('../../middlewares/midEmployee');
//const commonmiddlewares=require('../../middlewares/midcommon');


//router.post('/signUp',commonmiddlewares.decrypt,middlewaresEmp.signupValidator,employeeController.signUp);
//router.post('/login',commonmiddlewares.decrypt,middlewaresEmp.loginValidator,employeeController.login);

router.get('/list',shop.list)
router.post('/push',shop.push)
router.get('/listByName',shop.listByName)

//router.post('/encrypt',employeeController.encrypt)
//router.post('/decrypt',employeeController.decrypt)
module.exports=router
