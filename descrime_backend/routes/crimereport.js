var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const crimereportModel = require('../models/crimereport.model');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* Create new report */
router.post('/add', function(req, res, next) {

  let crimereportObj = new crimereportModel({
    firstname: 'Shreya',
    lastName: 'Ayyagari',
    address: 'park Avenue',
    phnumnber: '666666666666',
    email: 'testing@gmail.com',
    dateofcrime: '12-10-2021',
    timeofcrime: '12:00',
    description: 'it was a hit and run case. please help. i noted down the car plate number.'

  });
  crimereportObj.save(function(err, crimereportObj){
    if(err)
    {
      res.send({status:500, message: 'Unable to create report'});
      console.log(err);
    }
    else{
      res.send({status:200, message: 'report added successfully', crimereportDetails: crimereportObj});
    }
  })
 
});

module.exports = router;