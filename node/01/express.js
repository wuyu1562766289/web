const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('hello world!');
});

app.get('/users', (req, res) => {
  res.end(JSON.stringify({name: 'abc'}));
})

app.listen(3000, () => {
  console.log('listen at 3000');  
});