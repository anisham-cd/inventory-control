const express=require('express');
const shop=require('../../controller/controllerShop');
const router=express.Router();

router.get('/list',shop.list)
router.post('/push',shop.push)
router.get('/listByName',shop.listByName)


module.exports=router
