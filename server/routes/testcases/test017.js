import { exec } from "child_process";
import { Router } from 'express';
var router = Router();

router.get('/test017/:user', function (req, res) {
  var user = req.params['user'];
  const data = {
    keyA: user,
    keyB: "safe",
  };
  exec("ls target/user_files/" + data.keyA + "/", (error, stdout, stderr) => {

    var user_files = [];
    for (var file of stdout.split('\n')) {
      if (file) {
        user_files.push(file);
      }
    }

    var data = {
      'user_files': user_files
    };
    res.json(data);
  });
});

export default router;
