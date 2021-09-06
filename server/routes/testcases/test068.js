import { exec } from "child_process";
import { Router } from "express";
var router = Router();

router.get("/test068/:user", function (req, res) {
  var param = req.params["user"];

  var num = 196;
  var user = 500 / 42 + num > 200 ? param : "safe";
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
