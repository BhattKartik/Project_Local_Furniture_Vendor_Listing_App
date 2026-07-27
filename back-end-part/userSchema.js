//HEre i will write the schema for the mongooose

const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

let userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true ,
        unique:true  
    },
    password:{
        type:String,
        required:true
    }



    
})

// HERE WE HAVE DONE THE PRE SAVE HOOK FOR HASHING THE PASSWORD BEFORE SAVING IT TO THE DATABASE

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

let userModel = mongoose.model("user",userSchema,"user")
module.exports = userModel;
