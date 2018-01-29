require('module-alias/register')

const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const logger = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const api = require('./routes/api')
const keys = require('./config/keys')

const app = express()
const port = process.env.PORT || 3000
const config = require('./webpack-dev.config.js')
const compiler = webpack(config)

/* Webpack config */
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken)
    }
  )
)

app.use(logger('dev'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

/* Mongodb config */
mongoose.promise = global.Promise
mongoose.connect('mongodb://localhost/idea')

app.use('/api/v1', api)

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
)

app.get('/auth/google/callback', passport.authenticate('google'))

/* Render view */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
  console.log(process.env.NODE_ENV)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
