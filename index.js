const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'images')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(80, ()=>{console.log("yes")});
