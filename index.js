import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 5000

app.get("/", (req, res)=>{
    res.json({message: "Hello Ruman v2"})
})
app.get("/health", (req, res)=>{
    res.json({message: "All is good"})
})
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    
})