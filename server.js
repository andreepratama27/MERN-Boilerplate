require('module-alias/register')
require('./services/passport')

const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack-dev.config.js')
const keys = require('./configs/keys')

const app = express()
const port = process.env.PORT || 3000
const compiler = webpack(config)

const api = require('./routes/api')
const authRoutes = require('./routes/authRoutes')(app)

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

/* Webpack config */
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(logger('dev'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

/* Mongodb config */
mongoose.promise = global.Promise
mongoose.connect('mongodb://localhost/idea')

/* Declare API endpoint */
app.use('/api/v1', api)

/* Render view */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
  console.log(process.env.NODE_ENV)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
