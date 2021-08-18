var express = require('express');
var router = express.Router();

var test001 = require("./testcases/test001");
var test002 = require("./testcases/test002");
var test003 = require("./testcases/test003");
var test004 = require("./testcases/test004");
var test005 = require("./testcases/test005");

router.use(test001, test002, test003, test004, test005);

module.exports = router;
