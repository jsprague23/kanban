var router = require('express').Router()
var Lists = require('../models/list')

// GET ALL
router.get('/api/currentlists/:id', (req, res, next) => {
  Lists.find({ boardId: req.params.id })
    .then(lists => {
      res.status(200).send(lists)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// GET BY ID
router.get('/api/lists/:id', (req, res, next) => {
  Lists.findById(req.params.id)
    .then(list => {
      res.status(200).send(list)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// ADD
router.post('/api/lists', (req, res, next) => {
  var list = req.body
  this.userId = req.session.uid
  Lists.create(list)
    .then(newList => {
      res.status(200).send(newList)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// EDIT
router.put('/api/lists/:id', (req, res, next) => {
  Lists.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(list => {
      res.status(200).send({ message: 'Successfully Updated', list })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// DESTROY
router.delete('/api/lists/:id', (req, res, next) => {
  Lists.findByIdAndRemove(req.params.id)
    .then(data => {
      res.send('Successfully Deleted List')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {
  router
}
