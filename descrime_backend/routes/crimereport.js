var express = require('express');
var router = express.Router();

const crimereportModel = require('../models/crimereport.model');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;