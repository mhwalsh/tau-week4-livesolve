var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var task = require('./routes/task');
var app = express();

//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// pull in task router and use
app.use('/task', task);

app.get('/', function(req, res) {
  var indexPath = path.join(__dirname, '/public/views/index.html');
  console.log('log path ->', indexPath);
  res.sendFile(indexPath);
});

app.listen(3003, function() {
  console.log('listening on port 3003');
});
