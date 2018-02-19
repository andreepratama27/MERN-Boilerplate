const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  googleID: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema)
