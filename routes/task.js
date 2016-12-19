var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = 'postgres://localhost:5432/tau-tasks';

router.get('/', function(req, res) {
  console.log('in get tasks route');

  pg.connect(connectionString, function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }

    client.query("SELECT * FROM task;", function(err, result) {
      done(); //close connection to db

      if(err){
        console.log(err);
        res.sendStatus(500);
      }

      console.log('results -> ', result.rows);
      res.send(result.rows);
    });
  });
});

module.exports = router;
