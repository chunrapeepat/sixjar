const fs = require('fs')
const path = require('path')

const initOverviewDatabase = `
  necessity:0
  play:0
  financial:0
  education:0
  longterm:0
  give:0
`.replace(/  /g, '').trim()

// removeTransaction(id)
// getBudgets()
// createBudget(name, amount, account)
// removeBudget(id)

class DatabaseHandler {
  // Contructor: Initialize Database Structure
  constructor() {
    this.overviewPath = path.join(__dirname, 'database', 'overview.sixjar')
    this.transactionPath = path.join(__dirname, 'database', 'transaction.sixjar')
    this.budgetPath = path.join(__dirname, 'database', 'budget.sixjar')
    // Init Overview accounts database
    if(!fs.existsSync(this.overviewPath)){
      fs.writeFile(this.overviewPath, initOverviewDatabase, { overwrite: false }, err => {
        if (err) throw err
      })
    }
    // Init Transaction database
    if(!fs.existsSync(this.transactionPath)){
      fs.writeFile(this.transactionPath, "", { overwrite: false }, err => {
        if (err) throw err
      })
    }
    // Init Budget database
    if(!fs.existsSync(this.budgetPath)){
      fs.writeFile(this.budgetPath, "", { overwrite: false }, err => {
        if (err) throw err
      })
    }
  }
  // getAccount: Get total amount of each account`
  getAccount(account) {
    let database = fs.readFileSync(this.overviewPath).toString()
    database = database.split('\n')
    database = database.map(x => x.split(':'))
    database = database.filter(x => x[0] === account)
    if (database.length === 0) {
      return 'ERROR'
    }
    return database[0][1]
  }
  // setAccount: Set amount of each account
  setAccount(account, amount) {
    let database = fs.readFileSync(this.overviewPath).toString()
    database = database.split('\n')
    database = database.map(x => x.split(':'))
    database = database.map(x => (x[0] === account) ? [x[0], amount] : x)
    database = database.map(x => x.join(':'))
    database = database.join('\n')
    fs.writeFileSync(this.overviewPath, database)
  }
  // getTransactions: Get all transactions
  // save: id || note || amount || jar || date & time
  getTransactions() {
    let database = fs.readFileSync(this.transactionPath).toString()
    database = database.split('\n')
    database = database.filter(x => x != '')
    database = database.map(x => x.split('||'))
    return database
  }
  // createTransaction: Create new transaction
  createTransaction(note, amount, jar) {
    let database = fs.readFileSync(this.transactionPath).toString()
    let uniqueid = Math.random().toFixed(16).substring(2)
    let datetime = new Date().toLocaleString()
    let data = `${uniqueid}||${note}||${amount}||${jar}||${datetime}`
    database = database + data + '\n'
    fs.writeFileSync(this.transactionPath, database)
  }
}

module.exports = DatabaseHandler
