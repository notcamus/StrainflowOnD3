const express = require('express');
const app = express();
const bodyParser = require("body-parser");


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

app.get('/' , (req,res) => {
    res.render('home');
  });

  let port = process.env.PORT || 3000;
  app.listen(port, function() {
    console.log("Server started on port 3000 or " +  process.env.PORT);
  });