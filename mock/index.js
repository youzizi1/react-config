const express = require('express')
const cors = require('cors')
const history = require('./api/history')
const routes = [
  history
]

const app = express()
app.use(cors())

routes.forEach(route => {
  app[route.type](route.url, (req, res) => res.send(JSON.stringify(route.response())))
})

app.listen(3000)