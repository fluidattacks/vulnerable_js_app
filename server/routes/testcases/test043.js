import { Router } from "express";
var router = Router();
const fs = require("fs");
const path = require("path");

router.delete("/test043/:user/:fileName", function (req, res) {
  var user = req.params["user"];
  var fileName = req.params["fileName"];

  let result = {
    ok: false,
  };
  try {
    fs.unlinkSync("target/user_files/" + user + `/${fileName}`);
    result.ok = true;
  } catch (error) {
    result["ok"] = false;
    result["errors"] = [
      {
        message: error,
      },
    ];
  }
  res.send(result);
});

export default router;
