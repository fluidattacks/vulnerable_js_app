var express = require("express");
var router = express.Router();
const fs = require("fs");

router.get("/test069/:user", function (req, res) {
  var user = req.params["user"];
  var bar = "alsosafe";
  var valuesList = [];
  valuesList.push("safe");
  valuesList.push(user);
  valuesList.push("moresafe");
  valuesList.shift();
  bar = valuesList[1];

  let userFiles = "./target/user_files/";
  var filePath = userFiles + bar;
  fs.readdir(filePath, (error, files) => {
    if (error) {
      res.status("404").json({
        error: `the file ${filePath} does no exist`,
      });
    } else {
      res.json({ user_files: files });
    }
  });
});

module.exports = router;
