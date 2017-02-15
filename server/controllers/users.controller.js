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
    newUser.save((err, create) =>{
      res.send({
        username : create.username,
        email    : create.email,
        password : create.password
      })
    })
  },

  // LOGIN a user
  login : (req, res, next) => {
    user.findOne( { username: req.body.username } )
    .then( (login) => {
      if(!login){
        console.log(login);
        res.send('user not found!')
      }
      else if( hash.verify(req.body.password,login.password) ){
        console.log(login);
        let token = jwt.sign( {username: login.username, email: login.email}, process.env.SECRET);
        res.json( {
          username : login.username,
          email    : login.email,
          password : login.password,
          token    : token
        } );
      }
      else
          res.send('invalid username and password!')
    })
  },

  // UPDATE a user
  updateUser : (req,res) => {
    user.findOneAndUpdate({_id: req.params.id},{
        username  : req.body.username,
        email     : req.body.email,
        password  : hash.generate(req.body.password),
        updatedAt : new Date()
      }, { new : true }, (err, data) => {
    res.send(data)
    })
  },

  // DELETE a user
  deleteUser : (req, res) => {
    user.findOneAndRemove( {_id: req.params.id} ).then( (data) =>{
      res.send({
        message : "User (below) has been removed",
        data : data})
    })
  }
}
