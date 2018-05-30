var router = require('express').Router()
var Boards = require('../models/board')

router.post('/api/boards', (req, res, next) => {
  var board = req.body
  board.creator = req.session.uid
  Boards.create(board)
    .then(newBoard => {
      res.status(200).send(newBoard)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//finds all boards by creator id
router.get('/api/boards', (req, res, next) => {
  Boards.find({creator: req.session.uid})
    .then(boards => {
      res.status(200).send(boards)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


module.exports = {
  router
}

// //EDIT
// router.put('/api/boards/:id', (req, res, next) => {
//   Boards.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     .then(board => {
//       res.status(200).send({message: "Successfully Updated", board})
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
// })

// //DESTROY
// router.delete('/api/boards/:id', (req, res, next)=>{
//   Boards.findByIdAndRemove(req.params.id)
//     .then(data=>{
//       res.send("Successfully Deleted Board")
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
// })

// module.exports = {
//   router
// }