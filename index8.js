//input validation  this is ugly way to do input validation so we use ZOD
const express = require("express");
const app= express();
app.use(express.json());

app.post("/xyz",function ( req,res){
    const a=req.body.a;
    if (!a){
        res.json({
            msg:"wrong inputs"
        })
    }else{
        const alength=a.length;

        res.send("you have"+ alength + "a")

    }
   
});

app.listen(3000);
