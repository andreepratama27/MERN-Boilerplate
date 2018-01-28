require('module-alias/register')

const express = require('express')
const passport = require('passport')
const GoogleStragegy = require('passport-google-auth20').Strategy
const logger = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const api = require('./routes/api')

const app = express()
const port = process.env.PORT || 3000
const config = require('./webpack-dev.config.js')
const compiler = webpack(config)

/* Webpack config */
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

passport.use(new GoogleStrategy())

app.use(logger('dev'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

/* Mongodb config */
mongoose.promise = global.Promise
mongoose.connect('mongodb://localhost/idea')

app.use('/api/v1', api)

/* Render view */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
  console.log(process.env.NODE_ENV)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
