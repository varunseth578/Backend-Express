

const express = require("express");
const app= express();

app.get("/health-checkup",function(req,res){
    const username = req.headers.username;
    const pass = req.headers.pass;
    const phoneid = req.query.phoneid;

    if (username !="admin" || pass !="admin"){
        res.status(400).json({"msg":"something"})
        return  
        }
        if(phoneid != 1 && phoneid != 2){
            res.status(400).json({"msg":"something"})
            return
        }
        res.json({
            msg:"you are fine" 
        })
        // do something
      
});

app.listen(3000);
