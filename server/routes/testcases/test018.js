import { exec } from "child_process";
import { Router } from "express";
var router = Router();

router.get("/test018/:user", function (req, res) {
  var user = "";
  if (3 > 5) {
    user = req.params["user"];
  } else {
    user = "jane";
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

export default router;
