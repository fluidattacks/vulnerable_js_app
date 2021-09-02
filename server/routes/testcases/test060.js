import { Router } from "express";
import * as fileSystem from "fs";
import { join } from "path";
var router = Router();

router.get("/test060", function (req, res) {
  let body = req.body;

  let user = body.user;
  let file = body.fileName;
  let payload = body.payload;

  let result = {
    ok: false,
  };
  let filePath = join(`target/user_files/${user}/`, file + ".yaml");
  fileSystem.writeFile(filePath, payload, "utf8", (error) => {
    result.ok = true;
    if (errors) {
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
