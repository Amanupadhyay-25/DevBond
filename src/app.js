const express=require("express");
const app=express();

// Handling request from the server


app.use("/user",(req,res,next)=>{
    console.log('1 ');
    next();
},
(req,res,next)=>{
    console.log('2');
    next();
},
(req,res,next)=>{
    console.log('3');
    next();
},
(req,res,next)=>{
    console.log('4');
    res.send("Respond 4");
});


//Creating Server
app.listen(7777,()=>{
    console.log("Server is created on port no 7777.....");
});