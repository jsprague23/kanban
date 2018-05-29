var mongoose = require('mongoose')
var connectionString = 'mongodb://john:john@ds054619.mlab.com:54619/kanban'
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', ()=>{
  console.log('Connected to Database')
})