// import { express } from "express";
import express_pkg from 'express'
const {express} = express_pkg
// import { cors } from "cors";
import cors_pkg from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
const {cors} = cors_pkg;

// app config
const app = express_pkg()
const port = 4000

// middleware
app.use(express_pkg.json())
app.use(cors_pkg())

// db connection
connectDB();


// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express_pkg.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})