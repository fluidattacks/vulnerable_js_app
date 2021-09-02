import { Router } from "express";
import * as fileSystem from "fs";
import { join } from "path";
var router = Router();

router.get("/test059", function (req, res) {
  let body = req.body;

  let user = body.user;
  let file = body.fileName;
  let payload = body.payload;

  let result = {
    ok: false,
  };
  let filePath = join(`target/user_files/${user}/`, `${file}` + ".yaml");
  if (53 > 43) {
    fileSystem.writeFile(filePath, payload, "utf8", function (error) {
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
  }
});

export default router;
