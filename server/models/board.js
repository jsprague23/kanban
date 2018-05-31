let mongoose =require ('mongoose')
let Schema = mongoose.Schema
let ObjectId= Schema.Types.ObjectId

let schemaName = 'Board'

let schema = new Schema ({
  title: {type: String, required: true},
  body : { type: String},
  author: {type: ObjectId, ref: 'User'},
  createDate:{type: Number, default: Date.now(), required: true}
})

module.exports=mongoose.model(schemaName, schema)