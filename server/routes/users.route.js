var express = require('express');
var router  = express.Router();
var controller = require('../controllers/users.controller.js')

// GET all users
router.get('/', controller.getAllUser)
router.post('/signup', controller.createUser)
// router.put('/:id', controller.verifyUser, controller.updateUser)
// router.delete('/:id', controller.verifyUser, controller.deleteUser)

// LOGIN user
router.post('/login', controller.login)

module.exports = router;
