//app.use(express.json());

const express = require("express");
const app= express();
let nofrequest = 0;

function calRequest(req,res,next){
    nofrequest++;
    console.log(nofrequest);
    next();
}

//start
app.use(calRequest)
//
//app.use(express.json())
app.post("/health-checkup",function(req,res){
   
      
});

//end
// start
app.post("/health-checkup",calRequest,function(req,res){
   
      
});

//end
app.get("/health-checkup",function(req,res){
   
      
});

app.listen(3000);
