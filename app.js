const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, docuget!',
    rediss: process.env.REDIS_DOCUGET
  })
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
