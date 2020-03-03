const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.get(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
  res.render('index');
})

app.listen(PORT, ()=>{
  console.log("App listening on port " + PORT);
});