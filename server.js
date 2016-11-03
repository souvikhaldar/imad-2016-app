var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('C:\Users\Souvik_R\Downloads\11986310_902953379758189_4295255318760922416_n.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'C:\Users\Souvik_R\Downloads\11986310_902953379758189_4295255318760922416_n.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
