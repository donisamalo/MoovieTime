import list from './list.json'
import detail from './detail.json'

const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.get('/moovie', (req, res) => {
  res.json(list)
})

app.get('/moovie/:id', (req, res) => {
  res.json(detail)
})

module.exports = app
