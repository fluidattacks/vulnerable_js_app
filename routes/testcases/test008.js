const {
  exec
} = require("child_process");
var express = require('express');
var router = express.Router();

router.get('/test008/:user', function (req, res) {
  if (3 > 1 ) {
    var user = 'mary';
  } else {
    var user = req.params['user'];
  }

  exec("ls target/user_files/" + user + "/", (error, stdout, stderr) => {

    var user_files = [];
    for (file of stdout.split('\n')) {
      if (file) {
        user_files.push(file);
      }
    }

    var data = {
      'user_files': user_files,
      'user': user,
    };
    res.json(data);
  });
});

module.exports = router;
