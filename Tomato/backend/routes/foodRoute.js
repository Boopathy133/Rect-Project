// import { express } from "express";
import express_pkg from 'express';
const {express} = express_pkg
// import { multer } from "multer";
import multer_pkg from 'multer';
const {multer} = multer_pkg
import { addFood } from "../controllers/foodController.js";

const foodRouter = express_pkg.Router();

// Image storage  Engine
const storage = multer_pkg.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer_pkg({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)





export default foodRouter;