const express = require('express')
const hashtagsRouter = require('./routes/hashtags')
const bodyParser = require('body-parser')
const app = express()
const config = require('./config')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())

app.use('/api/hashtags', hashtagsRouter)

app.use((err, req, res, next) => {
  console.log('entro')

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message })
})

const server = app.listen(config.port, () => {
  console.log(`Server listening http://localhost:${server.address().port}`)
})

module.exports = server
