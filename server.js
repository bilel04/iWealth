const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;
/************************ DataBase ******************************/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('./config/db');
/************************ Routes ********************************/
const user= require('./routes/user')(router);
const quote= require('./routes/quote')(router);

mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Pas d\'accés au base de données: ', err);
  } else {
    console.log('Connecté au base de données: ' + config.db);
  }
});


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, UPDATE, HEAD,OPTIONS, PATCH');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));
app.use('/quote', quote);
app.use('/user', user);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.listen(port, () => {
    console.log('Port: ' + port);
});