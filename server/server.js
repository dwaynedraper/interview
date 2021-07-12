const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/interview', (req, res) => {
  res.send('Interview Time!');
})

app.get('/items', (req, res) => {
  res.send(['Dwayne Draper', 'Johnathan Blank', 'Kevin Mongiello', 'Kyle Simpson', 'Kyle C Dodds']);
});

const port = 3678;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})