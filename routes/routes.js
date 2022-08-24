const express= require('express')
const router= express.Router()
const { fetchAll ,fetchColumn} = require('../controllers/controller')

//route to fetch all data
router.get('/',fetchAll);
router.get('/:column',fetchColumn)

module.exports=router