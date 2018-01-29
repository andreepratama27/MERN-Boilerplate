const User = require('@models/User')
const Idea = require('@models/Idea')
const api = require('express').Router()

api.get('/users', (req, res) => {
  User.find({}, (err, user) => {
    res.json(user)
  })
})

api.post('/users', (req, res) => {
  let data = new User(req.body)

  data.save((err, result) => {
    if (err) res.send(err)
    res.json(result)
  })
})

api.get('/ideas', (req, res) => {
  Idea.find({}, (err, idea) => {
    res.json(idea)
  })
})

api.post('/ideas', (req, res) => {
  new Idea(req.body)
    .save((err, result) => {
      if (err) res.send(err)
      res.json(result)
    })
})

module.exports = api
