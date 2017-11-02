const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

module.exports = () => {
  app.get('/hi', (req, res) => {
    res.send('Fuck off')
  })
  app.listen(5000, () => console.log('> Electron + Express is running on port 5000'))
}
