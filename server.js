const express = require('express');
const path = require('path');
const formData = require('express-form-data');
const cors = require('cors');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser')
const logger = require('morgan');


const app = express();
require('dotenv').config();
require('./config/database');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(formData.parse());
app.use('/api/v1/items', require('./routes/api/items'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});