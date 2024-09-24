//Middlewares,authentication,global catches,zod
// middleware just precheck then using next ,fun2 is called if we not use next it hung in fun1
const express = require("express");
const app= express();
let nofrequest = 0;

function calRequest(req,res,next){
    nofrequest++;
    console.log(nofrequest);
    next();
}


app.get("/health-checkup",calRequest,function(req,res){
   
      
});
app.get("/health-checkup",calRequest,function(req,res){
   
      
});

app.listen(3000);
