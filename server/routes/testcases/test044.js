import { Router } from "express";
import * as pathh from "path";
var router = Router();
const fs = require("fs");

router.delete("/test044/:user/:fileName", function (req, res) {
  var user = req.params["user"];
  var fileName = req.params["fileName"];
  var filePath = pathh.join("target/user_files", user, `${fileName}.yaml`);

  let result = {
    ok: false,
  };
  if (2 > -4) {
    fs.unlink(filePath, (err) => {
      result.ok = true;
      if (err) {
        result["ok"] = false;
        result["errors"] = [
          {
            message: err,
          },
        ];
      }
      res.json(result);
    });
  }
});

export default router;
