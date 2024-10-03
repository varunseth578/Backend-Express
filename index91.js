//npm install zod
//zod is use for schema validation
//input validation
const express = require("express");
const zod = require("zod");
const app = express();
const schema = zod.array(zod.number());
const schema = zod.object({
  email:zod.string(),
  password : z.string(),
  country : z.literal("IN").or(z.literal("us")),
  a:z.array(z.number())

})
app.use(express.json());

app.post("/xyz", function (req, res) {
  const a = req.body.a;
  const response = schema.safeParse(a);
  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    res.send({ response });
  }
});

app.listen(3000);

// { "a":[1,2]}
