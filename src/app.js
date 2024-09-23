const express=require("express");
const app=express();

// Handling request from the server


app.get("/user",(req,res)=>{
    res.send("Get request call make succsessfully");
})

app.post("/user",(req,res)=>{
    //here Write logic for posting data
    res.send("Data is posted on server easily")
});

app.delete("/user",(req,res)=>{
    //Here write logic for deleting data from sever
    res.send("Data is Deleted Successfully");
})


//Creating Server
app.listen(7777,()=>{
    console.log("Server is created on porn no 7777.....");
});