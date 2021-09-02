import { Router } from "express";
import * as fileSystem from "fs";
import { join } from "path";
var router = Router();

router.get("/test057", function (req, res) {
  let body = req.body;

  let user = body.user;
  let file = body.fileName;
  let payload = body.payload;

  let result = {
    ok: false,
  };

  fileSystem.writeFile(
    `target/user_files/${user}/${file}`,
    payload,
    "utf8",
    (error) => {
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
    }
  );
});

export default router;
