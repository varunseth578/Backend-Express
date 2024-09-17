const express = require("express")
function calsum(n){
    let ans=0;
    for (let i=0;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}
const app = express();
app.get("/",function(req,res){
    const n = parseInt(req.query.n);
    const ans = calsum(n)
    res.send(ans.toString());
})

app.listen(5000);