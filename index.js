import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 5000

app.get("/", (req, res)=>{
    res.json({message: "Hello Ruman v3"})
})
app.get("/health", (req, res)=>{
    res.json({message: "All is good"})
})
app.get("/hospital", (req, res)=>{
    res.json({message: "City hospital"})
})
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    
})