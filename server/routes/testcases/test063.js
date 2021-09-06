import { Router } from "express";
import * as fileSystem from "fs";
import { join } from "path";
var router = Router();
router.get("/test063", function (req, res) {
  let body = req.body;

  let user = body.user;
  let file = body.fileName;
  let payload = body.payload;

  let usersFiles = "./target/user_files";

  let result = {
    ok: false,
  };
  let users = Array.from(fileSystem.readdirSync(usersFiles).values());
  if (users.includes(user)) {
    let userFiles = Array.from(
      fileSystem.readdirSync(`${usersFiles}/${user}/`).values()
    );
    if (userFiles.includes(file)) {
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
        } else {
          res.json(result);
        }
      });
    } else {
      res.json(result);
    }
  } else {
    result.ok = false;
    res.send(result);
  }
});

export default router;
