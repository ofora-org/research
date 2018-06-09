
const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const { createInitalRecord, updateRecord } = require('./lib/backend')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(cookieParser())
    server.use(bodyParser.json())
    server.post('/api/save', async (req, res) => {
      const recordId = req.cookies.recordId ?
        req.cookies.recordId : await createInitalRecord()
      await updateRecord(recordId, req.body)
      res.cookie('recordId', recordId)
      res.send('success')
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
