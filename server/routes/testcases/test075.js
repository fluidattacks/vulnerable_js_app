import { unlink } from "fs";
import { Router } from "express";
import * as pathh from "path";
var router = Router();

router.delete("/test075/:user/:fileName", function (req, res) {
  var _user = req.params["user"];
  var _fileName = req.params["fileName"];

  let list75 = ["safe", "safe", _user, _fileName];
  list75.shift();
  list75.push("safe");
  var fileName = list75[2];
  var user = list75[1];
  var filePath = pathh.join("target/user_files", user, fileName);

  let result = {
    ok: false,
  };
  unlink(filePath, (error) => {
    result.ok = true;
    if (error) {
      result["ok"] = false;
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
