const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/interview', (req, res) => {
  res.send('Interview Time!');
})



const port = 3789;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})