var express = require('express');
var router = express.Router();

var test001 = require("./testcases/test001");
var test002 = require("./testcases/test002");
var test003 = require("./testcases/test003");
var test004 = require("./testcases/test004");
var test005 = require("./testcases/test005");
var test006 = require("./testcases/test006");
var test007 = require("./testcases/test007");
var test008 = require("./testcases/test008");
var test009 = require("./testcases/test009");
var test010 = require("./testcases/test010");
var test011 = require("./testcases/test011");
var test012 = require("./testcases/test012");
var test013 = require("./testcases/test013");
var test014 = require("./testcases/test014");

router.use(test001, test002, test003, test004, test005, test006, test007, test008, test009, test010, test011, test012, test013, test014);

module.exports = router;
