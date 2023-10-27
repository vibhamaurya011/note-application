const { NoteModel } = require("../models/note.model")

const get = async(req, res)=>{
    try{
        const notes = await NoteModel.find({userID:req.body.userID})
        res.status(200).send({notes})
    }catch(err){
        res.status(400).send({"err":err.message})
    }
}
const add = async(req, res)=>{
    try{
        const note = new NoteModel(req.body)
        await note.save()
        res.status(200).send({"msg":"A new note has been added"})
    }catch(err){
        res.status(400).send({"err":err.message})
    }
}
const update = async (req, res) => {
    const { noteID } = req.params;
    const note = await NoteModel.findOne({ _id:noteID });
    try {
        if (note) {
            if (note.userID == req.body.userID) {
                await NoteModel.findOneAndUpdate({ _id: noteID }, req.body);
                res.status(200).json({ "msg": "Note updated successfully"});
            } else {
                res.status(200).json({ "msg": "You are not authorized to update" });
            }
        } else {
            res.status(404).json({ "msg": "Note not found" });
        }
    } catch (err) {
        res.status(400).json({ "err": err.message });
    }
}

const remove = async(req, res)=>{
    const {noteID} = req.params
    const note = await NoteModel.findOne({_id: noteID})
    try {
        if(note.userID == req.body.userID){
            await NoteModel.findOneAndDelete({ _id: noteID });
            res.status(200).json({ "msg": "Note deleted successfully"});
        }else{
            res.status(200).json({ "msg": "You are not authorized to delete"});
        }
    } catch (err) {
        res.status(400).json({ "err": err.message });
    }
}

module.exports={
    get,
    add,
    update,
    remove
}