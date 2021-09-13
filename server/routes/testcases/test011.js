const { exec } = require("child_process");
var express = require("express");
var router = express.Router();

router.get("/test011/:user", function (req, res) {
  var user = "";
  for (var key of Object.keys(req.params)) {
    if (key == "user") {
      user = req.params[key];
      break;
    }
  }
  exec("ls target/user_files/" + user + "/", (error, stdout, stderr) => {
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
