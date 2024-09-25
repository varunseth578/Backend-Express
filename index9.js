//another middle ware 
const express = require("express");
const app= express();
app.use(express.json());

app.post("/xyz",function (req,res){
    const a=req.body.a;
    const alength = a.length;
    res.send("you have"+ alength + "a")
});

//if any exception occur in above code it show this msg 
//global catches 
//help you give the user a better error message
// it take 4 argument 
  app.use(function(err,req,res,next){
   res.json({
        msg:"sorry something is up with our server"
    })
  })
app.listen(3000);
