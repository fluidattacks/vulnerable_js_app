const { spawn } = require("child_process");
var express = require("express");
var router = express.Router();

router.get("/test067/:user", function (req, res) {
  var param = req.params["user"];
  let user = "";
  var guess = "ABC";
  var switchTarget = guess[2];

  switch (switchTarget) {
    case "A":
      user = param;
      break;
    case "B":
      user = "bobs_your_uncle";
      break;
    case "C":
    case "D":
      user = param;
      break;
    default:
      user = "bobs_your_uncle";
      break;
  }
  const ls = spawn("ls", ["target/user_files/" + user + "/"]);

  ls.stdout.on("data", (data) => {
    var user_files = [];

    for (var file of data.toString().split("\n")) {
      if (file) {
        user_files.push(file);
      }
    }

    var data = {
      user_files: user_files,
    };
    res.json(data);
  });
  ls.stderr.on("data", (data) => {
    res.status(400).json({
      error: data.toString(),
    });
  });
});

module.exports = router;
