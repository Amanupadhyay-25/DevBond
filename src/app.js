const express=require("express");
const app=express();

//Handling request from the server
app.use("/test",(req,res)=>{
    res.send("Hello from Dashboard");
});

app.use("/hello",(req,res)=>{
    res.send("Hello Aman How are you")
});

//Creating Server
app.listen(3333,()=>{
    console.log("Server is created on porn no 3333.....");
});