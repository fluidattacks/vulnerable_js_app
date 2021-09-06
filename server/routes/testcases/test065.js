const { exec } = require("child_process");
var express = require("express");
var router = express.Router();

router.get("/test065/:user", function (req, res) {
  var user = "";
  var parameters = req.params;
  if (req.params["user"] != undefined) {
    user = parameters["user"];
  }
  let allowed = ["a", user];
  allowed.pop();
  allowed[1] = "safe";
  allowed.pop();
  allowed[1] = user;
  var param = decodeURI(allowed[1]);
  exec(`ls target/user_files/${param}/`, (error, stdout, stderr) => {
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
