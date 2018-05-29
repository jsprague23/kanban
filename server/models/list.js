let mongoose =require ('mongoose')
let Schema = mongoose.Schema
let ObjectId= Schema.Types.ObjectId

let schemaName = 'List'

let schema = new Schema ({
  title: {type: String, required:true},
  body : { type: {}},
  author: {type: String, ref: 'User'},
  boardId:{type: ObjectId},
  listId:{type: ObjectId},
  createDate:{type: Number, default: Date.now(), required: true}
})

module.exports=mongoose.model(schemaName, schema)