'use strict';
 
const serverless = require('serverless-http');
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Get User endpoint
app.get('/users/:userId', function (req, res) {
  const params = req.params.userId;
 
  res.send(`returning id: ${params}`);
})
 
module.exports.handler = serverless(app);