import { Router } from "express";
import * as fileSystem from "fs";
import { join } from "path";
var router = Router();
router.get("/test062", function (req, res) {
  let body = req.body;

  let user = body.user;
  let file = body.fileName;
  let payload = body.payload;

  let userFiles = "./target/user_files/";
  const testFolder = "./target/user_files/";

  let result = {
    ok: false,
  };
  let users = Array.from(fileSystem.readdirSync(userFiles).values());
  if (users.includes(user)) {
    let filePath = join(`target/user_files/${user}/`, file + ".yaml");
    fileSystem.writeFile(filePath, payload, "utf8", (error) => {
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
  } else {
    result.ok = false;
    res.send(result);
  }
});

export default router;
