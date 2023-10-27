const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title:String,
    body:String,
    userID:String,
    name:String
},{
    versionKey:false
})

const NoteModel = mongoose.model("node", noteSchema)

module.exports={NoteModel}