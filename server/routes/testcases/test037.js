import {
  Router
} from 'express';
import * as pathh from "path";
var router = Router();
const fs = require('fs');

router.delete('/test032/:user/:fileName', function (req, res) {
  var user = req.params['user'];
  var fileName = req.params['fileName'];
  var filePath = pathh.join("target/user_files", user, `${fileName}.yaml`);

  let result = {
    "ok": false,
  }
  try {
    if (2 > -4){
      fs.unlinkSync(filePath);
    }
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
