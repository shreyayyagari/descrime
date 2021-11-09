var express = require('express');
var router = express.Router();
const caseModel = require('../models/cases.model');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
