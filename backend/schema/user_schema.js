const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true 
  }, 
  lastName: {
    type: String,
    // required: true
  },
  userName: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true,
    unique: true
  },
  age: {
    type: Number,
    // required: true
  },
  contactNumber: {
    type: Number,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },  
  followers: [{
    type: String
  }],
  following: [{
    type: String
  }],
  savedPosts: [{
    type: String
  }], 
  subGredditsJoined: [{
    type: String
  }],
  subGredditsLeft: [{
    type: String
  }],
});

userSchema.plugin(uniqueValidator);  

module.exports = mongoose.model('User', userSchema);
 