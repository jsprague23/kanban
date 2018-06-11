let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'Comment'

let schema = new Schema({
  body: {type: String},
  author: {type: ObjectId, ref: 'user'},
  boardId: {type: ObjectId, ref: 'boards'},
  listId: {type: ObjectId, ref: 'list'},
  taskId: {type: ObjectId, required: true, ref: 'tasks'},
  createDate: {type: Number, default: Date.now(), required: true}
})

module.exports = mongoose.model(schemaName, schema)
