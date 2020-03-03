const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  // Trump Dump quotes https://docs.tronalddump.io/
  const url = 'https://api.tronalddump.io/random/quote'
  const trumpResponse = await axios.get(url)
  const original = trumpResponse.data.value;
  res.render('index', {original});
})

app.listen(PORT, ()=>{
  console.log("App listening on port " + PORT);
});