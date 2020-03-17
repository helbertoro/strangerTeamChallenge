const express = require('express')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.use('/api', apiRouter)

app.use((err, req, res, next) => {
  console.log('entro')

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message })
})

const server = app.listen(8000, () => {
  console.log(`Server listening http://localhost:${server.address().port}`)
})
