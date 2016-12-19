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

router.post('/', function(req, res) {
  console.log('create task route hit');
  console.log('req.body ->', req.body);
  var taskObject = req.body;

  pg.connect(connectionString, function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }

    client.query("INSERT INTO task (name) VALUES ($1)",
      [taskObject.name],
      function(err, result) {
        done();

        if(err){
          console.log(err);
          res.sendStatus(500);
        }
        res.sendStatus(201); //created
    });
  });
});

// https://expressjs.com/en/guide/routing.html
router.delete('/:id', function(req, res) {
  console.log('delete task route hit');
  var taskId = req.params.id;
  console.log('req.params.id ->', taskId);

  pg.connect(connectionString, function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    client.query("DELETE FROM task WHERE id = $1",
      [taskId], function(err, result) {
        if(err){
          console.log(err);
          res.sendStatus(500);
        }

        res.sendStatus(200); //OK
    });
  });
});

module.exports = router;
