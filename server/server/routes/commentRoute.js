import express from "express"
import Comment from "../model/comments.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {authmiddleware} from "../middleware/reruirelogin.js"


const router=express.Router()

router.put('/comment',authmiddleware,(req,res)=>{
    const comment={
        text:req.body.text,
        postedBy:req.user._id,
        name:req.user.name
    }
    console.log(req.user.name);
    console.log(comment.postedBy);
    console.log(req.body.name);
    //findOneAndUpdate(query, { name: 'jason bourne' }, options, callback)
    Comment.findOneAndUpdate({name:req.body.name},{
        $push:{comments:comment}
    },{
        new:true
    }).populate("postedBy","_id name")
    .populate("comments.postedBy","_id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

router.get('/allcomments',authmiddleware,(req,res)=>{
    
    Comment.find({})
    .populate("postedBy","_id name")
    .populate("comments.postedBy","_id name")
    
    .then((docs)=>{
        res.json({docs})
    }).catch(err=>{
        console.log(err)
    })
    
})

export default router