const electron = require('electron')
const open = require('open')
const {app, BrowserWindow} = electron
const server = require('./server')
const DatabaseHandler = require('./databaseHandler')

// This method will be call when Electron
// has finished initialization.
app.on('ready', () => {
  const window = new BrowserWindow({width: 1200, height: 750, resizable: false})
  window.loadURL(`http://localhost:3000`)

  // Open External link in default web browser
  const contents = window.webContents
  contents.on('new-window', (e, uri) => {
    e.preventDefault()
    open(uri)
  })
})

// Run Express server to communicate
// with React web view + parse database handler
const databaseHandler = new DatabaseHandler()
server(databaseHandler)
