const express = require("express")
const connectDB = require("./mongodbConnection_using_mongoose")
const userModel = require("../models/userSchema")
const cors = require("cors")
const app = express();

connectDB();


app.use(express.json())
app.use(cors())

const app = express();



app.get("/get",async(req,res)=>{

    try{
        let data = await userModel.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})


app.post("/signup",async(req,res)=>{

    try{
        let data = await userModel.create(req.body) //Here create method is used to create or save the data to the database and it will automatically call the pre save hook for hashing the password before saving it to the database
        
        res.status(201).json(data) //this will send the data to the client side after saving it to the database similar to res.send(data) but it will also set the status code to 201 which means created successfully
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})


app.listen(4000,()=>{
    console.log(`Server Started at port 4000`);
    
})