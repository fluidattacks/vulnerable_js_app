const {
  exec
} = require("child_process");
var express = require('express');
var router = express.Router();

router.get('/test014/:user', function (req, res) {
  var user_files = [];
  var user = "";

  var param = req.params['user'];
  var switchTarget = 'A';

  switch (switchTarget) {
    case 'A':
      user = param;
      break;
    case 'B':
      user = "bobs_your_uncle";
      break;
    case 'C':
    case 'D':
      user = param;
      break;
    default:
      uer = "bobs_your_uncle";
      break;
  }

  exec("ls test/test_files/users/" + user + "/", (error, stdout, stderr) => {

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
