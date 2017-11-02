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
}

module.exports = DatabaseHandler
