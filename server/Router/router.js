const express = require('express'),
router = express.Router()

//require controller
const controller = require('../Controller/controller')

router.get('/',controller.view)
router.get('/addUser',controller.addUser)
router.get('/updateUser',controller.updateUser)

//crude
router.post('/addUser',controller.create)
//router.post('/updateUser',controller.updateUser)

module.exports = router;