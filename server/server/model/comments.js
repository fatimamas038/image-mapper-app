import mongoose from "mongoose"

const {ObjectId} = mongoose.Schema.Types
const commentSchema = new mongoose.Schema({
    name:{
text:String
    },
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    
},{timestamps:true})

const Comment=mongoose.model("Comment",commentSchema)
export default Comment