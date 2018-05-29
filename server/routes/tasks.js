var router = require('express').Router()
var Tasks = require('../models/task')

//GET ALL
router.get('/api/tasks', (req, res, next) => {
  Tasks.find({})
    .then(tasks => {
      res.status(200).send(tasks)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//GET BY ID
router.get('/api/tasks/:id', (req, res, next)=>{
  Tasks.findById(req.params.id)
    .then(task =>{
      res.status(200).send(task)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//ADD
router.post('/api/tasks', (req, res, next) => {
  var task = req.body
  this.userId=req.session.uid
  Tasks.create(task)
    .then(newTask => {
      res.status(200).send(newTask)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT
router.put('/api/tasks/:id', (req, res, next) => {
  Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(task => {
      res.status(200).send({message: "Successfully Updated", task})
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//DESTROY
router.delete('/api/tasks/:id', (req, res, next)=>{
  Tasks.findByIdAndRemove(req.params.id)
    .then(data=>{
      res.send("Successfully Deleted Task")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {
  router
}