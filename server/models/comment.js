let mongoose =require ('mongoose')
let Schema = mongoose.Schema
let ObjectId= Schema.Types.ObjectId

let schemaName = 'Comment'

let schema = new Schema ({
  body : { type: {}},
  author: {type: String, ref: 'User'},
  boardId:{type: ObjectId},
  listId:{type: ObjectId},
  taskId:{type:ObjectId, required: true},
  createDate:{type: Number, default: Date.now(), required: true}
})

module.exports=mongoose.model(schemaName, schema)