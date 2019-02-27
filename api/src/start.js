import express from 'express'
import bodyParser from 'body-parser'

import router from './handlers'

const app = express()
const port = 3001

app.use(bodyParser.json())

app.post('/api', (req, res) => {
  const body = req.body && typeof req.body === 'object' ? req.body : false
  if (body) {
    const action = typeof body.action === 'string' ? body.action : false
    if (action) {
      const handler = typeof router[action] !== 'undefined' ? router[action] : router['NOT_FOUND']
      handler(req, res)
    } else {
      res.json({ error: 'No action provided.' })
    }
  } else {
    res.json({ error: 'No body provided.' })
  }
})

const server = app.listen(port, (err) => {
  if (err) {
    console.error(err)
  }
  console.info(`==> listening on http://localhost:${port}.`)
})

function stop() {
  server.close()
}

module.exports = server
module.exports.stop = stop
