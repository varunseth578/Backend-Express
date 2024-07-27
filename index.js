const express = require("express");
const bodyParser = require("body-parser");

// express hello world 
const app = express();

// getting output in terminal
app.use(bodyParser.json());
app.post('/conn', (req, res) => {
  const message = req.body.message;
  console.log(message);
  res.json({
    output : "2+2"
  });
});


app.get('/route', (req, res) => {
  res.json({
    name: varun,
    age:21
  });
});
app.post('/con', (req, res) => {
  console.log(req.body)
  res.send({
    msg : "2+2"
  });
});
 
app.get('/', (req, res) => {
  res.send('<h1> Hello, World </h1>');
});
 
app.listen(8000, () => {
  console.log(`Server is listening at http://localhost:8000`);
});