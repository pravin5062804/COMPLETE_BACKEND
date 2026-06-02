const express = require("express");

const app = express();

app.use(express.json());

const notes=[]


app.post("/notes",(req,res)=>{
    notes.push(req.body);
    console.log(req.body);
    
    res.status(201).json({
        message:"Success created new resouce"
    })
    
})


app.get("/notes",(req,res)=>{
    res.status(200,json({
        message:"notes Fetch success",
        notes:notes 
    }))
})

module.exports=app;