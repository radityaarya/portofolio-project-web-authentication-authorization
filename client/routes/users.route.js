var express = require('express');
var router  = express.Router();
var controller = require('../controllers/users.controller.js')

// GET all users
router.get('/', controller.getAllUser)
// CREATE user
router.post('/', controller.createUser)
// UPDATE user
router.put('/', controller.updateUser)
// DELETE user
router.delete('/', controller.deleteUser)

module.exports = router;
