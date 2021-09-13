import { exec as command } from "child_process";
import { Router } from "express";
var router = Router();

router.get("/test028", function (req, res) {
  let body = req.body;

  command(
    "ls target/user_files/" + body["user"] + "/",
    (error, stdout, stderr) => {
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
    }
  );
});

export default router;
