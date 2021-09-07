import { unlink } from "fs";
import { Router } from "express";
import * as pathh from "path";
var router = Router();

router.delete("/test076/:user/:fileName", function (req, res) {
  var _user = req.params["user"];
  var _fileName = req.params["fileName"];

  let list76A = ["safe", _user];
  let list76B = [_fileName, "safe"];
  list76A.shift();
  list76A.push("safe");
  list76B.pop();
  let list76C = list76A.concat(list76B);
  var fileName = list76C[2];
  var user = list76C[0];
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
