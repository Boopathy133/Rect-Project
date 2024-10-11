const router = require("express").Router();
const bcrypt = require ('bcrypt');
// import { User, validate } from "../models/user";
// import User from "../models/user"
// import validate from "../models/user"
// import { User,validate } from "../models/user";
const User = require("../models/user");
const validate = require("../models/user");


router.post("/",async(req,res)=>{
    try {
        const {error} = validate(req.body);
        if (error) {
            return res.status(400).send({message:error.details[0].message})
        }
        const user = await User.findOne({email:req.body.email});
        
        if (user) {
            return res.status(409).send({message:"User already exists"});
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        await new User({...req.body,password:hashPassword}).save();
        res.status(201).send({message:"User created successfully"});
    } catch (error) {
        res.status(500).send({message:"Internal server Error"});
    }
})

module.exports = router;