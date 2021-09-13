import { Router } from "express";
import { unlinkSync } from "fs";
import { join } from "path";
var router = Router();

router.get("/test038", function (req, res) {
  let body = req.body;
  var user = body["user"];
  var fileName = body["fileName"];
  var filePath = join("target/user_files", user, fileName);

  let result = {
    ok: false,
  };
  try {
    unlinkSync(filePath);
    result.ok = true;
  } catch (error) {
    result["ok"] = false;
    result["errors"] = [
      {
        message: error,
      },
    ];
  }
  res.send(result);
});

export default router;
