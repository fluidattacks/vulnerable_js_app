const { exec } = require("child_process");
var express = require("express");
var router = express.Router();

router.get("/test013/:user", function (req, res) {
  var user_files = [];
  var user = "";
  var paramValues = Object.values(req.params);
  if (paramValues.length > 0) {
    user = paramValues[0];
  }
  if (user) {
    exec("ls target/user_files/" + user + "/", (error, stdout, stderr) => {
      for (var file of stdout.split("\n")) {
        if (file) {
          user_files.push(file);
        }
      }

      var data = {
        user_files: user_files,
      };
      res.json(data);
    });
  }
});

module.exports = router;
