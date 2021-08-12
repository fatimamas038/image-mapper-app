import express from "express"
import mongoose from "mongoose"
import userRoutes from "./routes/userRoute.js"
import commentRoute from "./routes/commentRoute.js"
import dotenv from "dotenv"
import path from "path"
dotenv.config();

const app=express()

const PORT=process.env.PORT||5000

const conn= await mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true,
  useNewUrlParser:true,
  useCreateIndex:true,
  
  })
  console.log(`Mongodb connected: ${conn.connection.host}`);
app.use(express.json())
app.use("/user",userRoutes)
app.use("/",commentRoute)


const __dirname=path.resolve()

    app.use(express.static("client/build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })



app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
})