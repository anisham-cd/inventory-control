const express=require('express');
const godown=require('../../controller/godownController');
const router=express.Router();
router.get('/list',godown.list)
router.post('/push',godown.push)
router.get('/listByName',godown.listByName)

module.exports=router
