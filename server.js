
var express = require('express');
var app = express();

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === "hello") {
      console.log("Validating webhook");
      res.status(200).send(req.query['hub.challenge']);
    } else {
      console.error("Failed validation. Make sure the validation tokens match.");
      res.sendStatus(403);
    }
      });


app.use(express.static(__dirname + '/build/'));
app.listen(process.env.PORT || 8080);
