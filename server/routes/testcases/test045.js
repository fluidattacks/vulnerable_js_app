import { Router } from "express";
var router = Router();
const fs = require("fs");
const path = require("path");

router.delete("/test045/:user/:fileName", function (req, res) {
  var user = req.params["user"];
  var fileName = req.params["fileName"];
  var filePath = path.join("target/user_files", user, `${fileName}`);

  let result = {
    ok: false,
  };
  fs.unlink(filePath, (error) => {
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
