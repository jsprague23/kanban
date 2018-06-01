var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = process.env.PORT || 3000
app. use(express.static(__dirname + '../www/dist'))

var whitelist = ['http://localhost:8080', 'https://khanbhan.herokuapp.com'];
var corsOptions = {
	origin: function (origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};

app.use(cors(corsOptions))
//Fire up database connection
require('./db')


//REGISTER MIDDLEWEAR
app.use(bp.json())
app.use(bp.urlencoded({
  extended: true
}))

let auth = require('./auth/routes')
app.use(auth.session)
app.use(auth.router)


//Gate Keeper Must login to access any route below this code
app.use((req,res,next)=>{
  if (!req.session.uid) {
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})

//YOUR ROUTES HERE!!!!!!
var comment = require('./routes/comments')
app.use(comment.router)
var board = require('./routes/boards')
app.use(board.router)
var list = require('./routes/lists')
app.use(list.router)
var task = require('./routes/tasks')
app.use(task.router)


//Catch all

app.get('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


app.listen(port, () => {
  console.log('server running on port', port)
})