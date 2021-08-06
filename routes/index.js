var express = require('express');
var router = express.Router();

var test001 = require("./testcases/test001");
var test002 = require("./testcases/test002");

router.use(test001, test002);

module.exports = router;
