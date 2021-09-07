import { exec } from "child_process";
import { Router } from "express";
var router = Router();

router.get("/test074/:user", function (req, res) {
  var user = req.params["user"];
  var map64 = {
    keyA: "a_Value",
    keyB: "safe",
    keyC: "c_value",
  };
  var param = user;
  map64.keyB = param;
  user = map64["keyB"];
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
