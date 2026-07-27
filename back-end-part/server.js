const express = require("express")
const connectDB = require("./mongodbConnection_using_mongoose")
const userModel = require("./userSchema")
const cors = require("cors")

connectDB();


app.use(express.json())
app.use(cors())

const app = express();



app.get("/get",async(req,res)=>{

})


app.post("/post",async(req,res)=>{

})

app.delete("/delete",async(req,res)=>{

})

app.put("/put",async(req,res)=>{
    
})



app.listen(4000,()=>{
    console.log(`Server Started at port 4000`);
    
})