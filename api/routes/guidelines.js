const express = require('express');
const router = express.Router();
const request = require('request');

const utils = require('../lib/utils');

router.post('/interactions', function(req, res, next) {

  var postData = require('querystring').stringify({
      'guideline_group_id' : `CIG-` + req.body.guideline_group_id,
  });

  utils.callPrologServer("interactions", postData, res);

});

router.post('/get', function(req, res, next) {

  utils.sparqlGraphInstanceOf("CIG-" + req.body.guideline_group_id, "<http://anonymous.org/vocab/ClinicalRecommendation>", function(sparqlQuery, error, response, body, uris) {

    res.send(uris);

  });

});

module.exports = router;
