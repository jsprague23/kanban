let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'List'

let schema = new Schema({
  title: {type: String, required: true},
  body: { type: String },
  author: {type: ObjectId, ref: 'user'},
  boardId: {type: ObjectId, required: true, ref: 'board'},
  createDate: {type: Number, default: Date.now(), required: true}
})

module.exports = mongoose.model(schemaName, schema)
