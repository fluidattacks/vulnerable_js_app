import { execSync } from "child_process";
import { Router } from "express";
var router = Router();

router.get("/test015/:user", function (req, res) {
  var user = req.params["user"];
  var stdout = execSync("ls target/user_files/" + user + "/").toString();

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

export default router;
