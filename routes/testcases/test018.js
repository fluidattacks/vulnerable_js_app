const {
  exec
} = require("child_process");
var express = require('express');
var router = express.Router();

router.get('/test018/:user', function (req, res) {
  var user = "";
  if (3 > 5) {
    user = req.params['user'];
  } else {
    user = "jane";
  }
  exec("ls test/test_files/users/" + user + "/", (error, stdout, stderr) => {

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