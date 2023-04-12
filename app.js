const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3000

app.use( express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.send('aqui vai a index');
})

app.get('/header', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/header.html'));
})

app.get('/footer', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/footer.html'));
})

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/index.html'));
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})