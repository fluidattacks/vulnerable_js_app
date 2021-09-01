import { unlink } from "fs";
import { join } from "path";
import { Router } from "express";
var router = Router();

router.delete("/test046/:user/:fileName", function (req, res) {
  var user = req.params["user"];
  var fileName = req.params["fileName"];
  var filePath = join("target/user_files", user, fileName);

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
    res.send(result);
  });
});

export default router;
