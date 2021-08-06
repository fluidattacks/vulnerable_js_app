var express = require('express');
var router = express.Router();

var test001 = require("./testcases/test001");

router.use(test001);

module.exports = router;
