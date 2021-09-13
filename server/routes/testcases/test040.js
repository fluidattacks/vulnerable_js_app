import { Router } from "express";
var router = Router();
const fs = require("fs");

router.delete("/test040/:user/:fileName", function (req, res) {
  var user = req.params["user"];
  var fileName = req.params["fileName"];

  let result = {
    ok: false,
  };
  try {
    fs.unlinkSync("target/user_files/" + user + `/${fileName}.yaml`);
    result.ok = true;
  } catch (error) {
    result["ok"] = false;
    result["errors"] = [
      {
        message: error,
      },
    ];
  }
  res.json(result);
});

export default router;
