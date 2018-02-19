const mongoose = require('mongoose')
const { Schema } = mongoose

const IdeaSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
})

module.exports = mongoose.model('Idea', IdeaSchema)
