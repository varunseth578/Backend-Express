const express = require("express");
const app = express();

// in memory data 
const user = [{
    name: "varun",
    phone:[{
        healthy:false
    }]
}];
app.use(express.json());
app.get("/", function (req, res) {
    const varunp = user[0].phone;
   const no = varunp.length;
   let nofh=0;
   for(let i=0 ; i<varunp.length;i++){
    if (varunp[i].healthy){
        nofh = nofh + 1;
    }
   }
   const nofuh= no -nofh;
   res.json({
    no,
    nofh,
    nofuh
   })

   
 
});


app.post("/", function (req, res){
    const ishealthy =req.body.ishealthy;
    user[0].phone.push({
        healthy: ishealthy
    })
    res.json({
        msg:"Done."
    })
})

app.put("/", function (req, res){
    for(let i=0 ; i<user[0].phone.length;i++){
        user[0].phone[i].healthy=true;
       }
       res.json({});

})

app.delete("/", function (req, res){
    const newphone = [];
    for(let i=0 ; i<user[0].phone.length;i++){
       if(user[0].phone[i].healthy) {
        newphone.push({
            healthy:true
        })
       }
       }
       user[0].phone=newphone;
       res.json({msg:"done"})

})


app.listen(3000);
