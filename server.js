const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const port = process.env.PORT || 3000
const config = require('./webpack-dev.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/api/v1/users', (req, res) => {
  res.json({
    express: 'Hello from express'
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
