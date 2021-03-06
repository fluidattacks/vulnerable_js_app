const { exec } = require("child_process");
var express = require("express");
var router = express.Router();

router.get("/test010/:user", function (req, res) {
  var user = "";
  var parameters = req.params;
  if (req.params["user"] != undefined) {
    user = parameters["user"];
  }
  user = decodeURI(user);
  exec(`ls target/user_files/${user}/`, (error, stdout, stderr) => {
    var user_files = [];
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
});

module.exports = router;
