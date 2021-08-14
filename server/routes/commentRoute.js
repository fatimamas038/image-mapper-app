import express from "express"
import Comment from "../model/comments.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {authmiddleware} from "../middleware/reruirelogin.js"


const router=express.Router()

router.get('/alldefects',authmiddleware,(req,res)=>{
    
    Defect.find().sort({_id:-1}).limit(1)
    .then((docs)=>{
        res.json(docs)
    }).catch(err=>{
        console.log(err)
    })
    
})
router.put('/alldefects',authmiddleware,(req,res)=>{
    const entries=req.body.entries
    console.log(entries);
    const defect=new Defect({
       entries:req.body.entries 
    })
    
    defect.save()
    .then(savedDoc => {
        res.json(savedDoc)
      });
})

export default router
