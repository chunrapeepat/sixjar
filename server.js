const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

module.exports = (databaseHandler) => {
  databaseHandler.createTransaction('Gurock test', 500, 'Play')
  console.log(databaseHandler.getTransactions())
  // Get overview account total amount
  app.get('/overview/:account', (req, res) => {
    let account = req.params.account
    res.send(databaseHandler.getAccount(account))
  })

  app.listen(5000, () => console.log('> Electron + Express is running on port 5000'))
}
