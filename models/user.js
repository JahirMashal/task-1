const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true,
    unique: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  phoneNumber: { 
    type: String, 
    unique: true, 
    sparse: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    enum: ['employee', 'admin'], 
    required: true 
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
