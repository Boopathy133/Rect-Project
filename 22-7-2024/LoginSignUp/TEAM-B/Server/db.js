const mongoose = require("mongoose");

module.exports = ()=>{
    const connetionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.DB,connetionParams);
        console.log("Connected to the DB successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect");
    }
}