var mongoose = require('mongoose')
var connectionString = 'mongodb://tester1234:tester1234@ds151840.mlab.com:51840/steve-kanban'
// var connectionString = 'mongodb://john:john@ds054619.mlab.com:54619/kanban'
var connection = mongoose.connection

mongoose.connect(connectionString)
mongoose.set('debug', true)

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})

connection.once('open', ()=>{
  console.log('Connected to Database')
})
