//http is use to expose functionality to world
// by using express and spring bot in java http is protocol (node.js)
// creating http server 
const express = require("express");

const app = express();

function calsum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}
app.get("/", function (req, res) {
    const n= req.query.n;
    const ans = calsum(n);
  res.send("hii there"+ans);
});

app.listen(3000);

