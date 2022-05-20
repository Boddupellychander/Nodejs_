const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./server.js');

var employeeController = require('./controller/employeeController.js');

const app = express();
app.use(bodyParser.json());

//var rt = require('./route.js');

//app.use('/hello', rt);

app.listen(5000, () => console.log('server running...'));

app.use('./employees', employeeController);