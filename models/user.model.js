const mongoose = require('mongoose')
const { type } = require('os')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [3, "username must be at least 3 character long"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [10, "Email must be at least 3 character long"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Password must be at least 3 character long"],
  },
});




const user = mongoose.model('user',userSchema)

module.exports =user