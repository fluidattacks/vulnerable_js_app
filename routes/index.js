var express = require('express');
var router = express.Router();

var test001 = require("./testcases/test001");
var test002 = require("./testcases/test002");
var test003 = require("./testcases/test003");
var test004 = require("./testcases/test004");
var test005 = require("./testcases/test005");
var test006 = require("./testcases/test006");
var test007 = require("./testcases/test007");

router.use(test001, test002, test003, test004, test005, test006, test007);

module.exports = router;
