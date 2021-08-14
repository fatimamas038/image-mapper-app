import mongoose from "mongoose"

const {ObjectId} = mongoose.Schema.Types
const defectSchema = new mongoose.Schema({
    entries:[]
    
    
},{timestamps:true})

const Defect=mongoose.model("Defect",defectSchema)
export default Defect
