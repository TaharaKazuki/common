const express = require('express');
const bobyParser = require('body-parser');

const app = new express();

app.use(bobyParser.urlencoded({ extended: true}));
app.use(bobyParser.json());

app.use("/api/",(function(){
  const router = express.Router();

  router.get("/user/:id",function(req,res){
    const user = {
      id: req.params.id,
      name: "tanaka",
      role: "group1"
    };
    res.json(user);
  });

  router.post("user",function (req, res) {
    const body = req.body;
    if(!body.name || !body.role){
      return response.json(false);
    }
    const user = {
      id: 0,
      name: body.name,
      role: body.role
    };
    response.json(true);
  });
  return router;
})());

app.listen(3000);

