const {
  execFile
} = require("child_process");
var express = require('express');
var router = express.Router();

router.get('/test009/:user', function (req, res) {
  var user = req.params['user'];

  var command = "/run/current-system/sw/bin/ls";
  var arguments = ["test/test_files/users/" + user + "/"]
  execFile(command, arguments, (error, stdout) => {

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