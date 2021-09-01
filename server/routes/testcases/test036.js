import * as fs from "fs";
import { join } from "path";
import {
  Router
} from 'express';
var router = Router();

router.delete('/test036/:user/:fileName', function (req, res) {
  var user = req.params['user'];
  var fileName = req.params['fileName'];
  var filePath = join("target/user_files", user, fileName);

  let result = {
    "ok": false,
  }
  try {
    fs.unlinkSync(filePath);
    result.ok = true;
  } catch (error) {
    result["ok"] = false;
    result["errors"] = [{
      "message": error
    }];
  }
  res.send(result);
});

export default router;
