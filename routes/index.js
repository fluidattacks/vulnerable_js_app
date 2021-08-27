var express = require('express');
var consign = require('consign');
var router = express.Router();

var files = consign({
    cwd: 'routes'
  })
  .include('testcases')._files;

for (file of files) {
  var mod = require(file);
  router.use(mod);
}

module.exports = router;
