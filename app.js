const express = require('express')
const app = express()
const path = require('path');
const router = require('./router')


const port = 3000

app.set('view engine','ejs')

//app.use( express.static(path.join(__dirname + '/public')));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(router)





app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})