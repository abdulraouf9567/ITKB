const express = require('express')
const {getKb,getKbById} =require('../controllers/kbController')

const router=express.Router()

router.get('/',getKb)
router.get('/:id',getKbById)

module.exports=router