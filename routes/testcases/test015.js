const {
  execSync
} = require("child_process");
var express = require('express');
var router = express.Router();

router.get('/test015/:user', function (req, res) {
  var user = req.params['user'];
  var stdout = execSync("ls test/test_files/users/" + user + "/").toString()

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

module.exports = router;
