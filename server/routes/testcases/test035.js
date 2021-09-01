import { unlinkSync } from 'fs';
import {
  Router
} from 'express';
import * as pathh from "path";
var router = Router();

router.delete('/test035/:user/:fileName', function (req, res) {
  var user = req.params['user'];
  var fileName = req.params['fileName'];
  var filePath = pathh.join("target/user_files", user, fileName);

  let result = {
    "ok": false,
  }
  try {
    unlinkSync(filePath);
    result.ok = true;
  } catch (error) {
    result["ok"] = false;
    result["errors"] = [{
      "message": error
    }];
  }
  res.json(result);
});

export default router;
