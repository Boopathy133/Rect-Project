const { required } = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:'7d'});
    return token
}

const User = mongoose.model("user",userSchema);

const validate = (date)=>{
    const schema = Joi.object({
        firstname:Joi.string().required().label("First Name"),
        lastname:Joi.string().required().label("Last Name"),
        email:Joi.string().email().required().label(" E-mail"),
        password:passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
};

module.exports = {User, validate};