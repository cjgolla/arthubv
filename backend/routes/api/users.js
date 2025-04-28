const express = require('express')
const router = require('../router');
const app = express();

app.use('/test', router)

module.exports = app;