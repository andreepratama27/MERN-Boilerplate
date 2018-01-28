const mongoose = require('mongoose')
const IdeaSchema = new mongoose.Schema({
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
