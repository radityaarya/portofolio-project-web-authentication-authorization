const user = require('../models/users.model')
const hash = require('password-hash');
const jwt  = require('jsonwebtoken');

module.exports = {

  // GET all users
  getAllUser : (req, res) => {
    user.find( {}, {__v : false}, (err, data) =>{
      res.send(data)
    })
  },

  // CREATE a user
  createUser : (req, res) => {
    let newUser = user({
      username : req.body.username,
      email    : req.body.email,
      password : hash.generate(req.body.password)
    })
  },

  // UPDATE a user
  updateUser : (req,res) => {
    user.findOneAndUpdate({_id: req.params.id},{
        username  : req.body.username,
        email     : req.body.password,
        password  : hash.generate(req.body.password),
        updatedAt : new Date()
      }, { new : true }, (err, data) => {
    res.send(data)
    })
  },

  deleteUser : (req, res) => {
    user.findOneAndRemove( {_id: req.params.id} ).then( (data) =>{
      res.send(data)
    })
  }
}
