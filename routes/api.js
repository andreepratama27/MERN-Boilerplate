const api = require('express').Router()
const handler = require('./handler')

api.get('/users', handler.users)

module.exports = api
