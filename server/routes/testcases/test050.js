import { Router } from "express";
import { writeFileSync } from "fs";
import { join } from "path";
var router = Router();

router.get("/test050", function (req, res) {
  let body = req.body;

  let user = body.user;
  let file = body.fileName;
  let payload = body.payload;
  var filePath = join("target/user_files", user, file);

  let result = {
    ok: false,
  };
  try {
    writeFileSync(filePath, payload, "utf8");
    result.ok = true;
  } catch (error) {
    result.ok = false;
    result["errors"] = [
      {
        message: error,
      },
    ];
  }
  res.json(result);
});

export default router;
