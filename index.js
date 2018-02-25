'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express()
app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//MY ROUTES
app.get('/', function(req, res) {
  rs.send("Hi thi chatbpox")
})

app.get('/webhook/', function(req, res) {
  if (req.query['hub.verify_token'] === 'sevensand'){
    res.send(req.query['hub.challenge'])
  }
  res.send("wrong token")
})

app.listen(app.get('port'), function() {
  console.log("running server")
})
