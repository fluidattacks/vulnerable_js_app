const {
  exec
} = require("child_process");
var express = require('express');
var router = express.Router();

router.get('/test017/:user', function (req, res) {
  var user = req.params['user'];
  const data = {
    keyA: user,
    keyB: "safe",
  };
  exec("ls test/test_files/users/" + data.keyA + "/", (error, stdout, stderr) => {

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
