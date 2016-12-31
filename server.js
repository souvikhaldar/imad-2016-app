var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'signup.html'));
});
app.get('/write', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'personel.html'));
});
app.get('/signin', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'signin.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/1483119860110.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1483119860110.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
