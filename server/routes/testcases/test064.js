import { exec } from "child_process";
import { Router } from "express";
var router = Router();

router.get("/test064/:user", function (req, res) {
  var user = req.params["user"];
  var map64 = {
    keyA: "a_Value",
    keyB: user,
    keyC: "c_value",
  };
  map64["keyB"] = "safe";
  exec("ls target/user_files/" + map64.keyB + "/", (error, stdout, stderr) => {
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
