const process = require("child_process");
var express = require('express');
var router = express.Router();

router.get('/test007', function (req, res) {
  let body = req.body;

  process.exec("ls target/user_files/" + body['user'] + "/", (error, stdout, stderr) => {

    var user_files = [];
    for (file of stdout.split('\n')) {
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

module.exports = router;
