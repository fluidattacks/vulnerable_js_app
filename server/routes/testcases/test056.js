import { Router } from "express";
import { writeFile } from "fs";
import { join } from "path";
var router = Router();

router.get("/test056", function (req, res) {
  let body = req.body;

  let user = body.user;
  let file = body.fileName;
  let payload = body.payload;
  var filePath = join("target/user_files", user, file);

  let result = {
    ok: false,
  };
  writeFile(filePath, payload, "utf8", (error) => {
    result.ok = true;
    if (error) {
      result.ok = false;
      result["errors"] = [
        {
          message: error,
        },
      ];
    }
    res.json(result);
  });
});

export default router;
