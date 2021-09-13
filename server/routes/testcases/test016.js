import { exec } from "child_process";
import { Router } from "express";
var router = Router();

router.get("/test016/:user", function (req, res) {
  var user_files = [];
  var user = "";

  var param = req.params["user"];
  var switchTarget = "A";

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
      uer = "bobs_your_uncle";
      break;
  }

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
});

export default router;
