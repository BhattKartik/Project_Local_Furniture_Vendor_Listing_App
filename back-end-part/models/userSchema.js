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

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    this.password = await bcrypt.hash(this.password, 10); //Here 10 is the salt rounds for hashing the password which is a good practice for security and no two passwords will be same even if they are same because of the salt rounds and the hashing algorithm used by bcrypt
    next();
});

let userModel = mongoose.model("user",userSchema,"user")
module.exports = userModel;
