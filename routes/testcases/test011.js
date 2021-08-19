const {
  exec
} = require("child_process");
var express = require('express');
var router = express.Router();

router.get('/test011/:user', function (req, res) {
  var user = "";
  for(key of Object.keys(req.params))
  {
    if (key == 'user'){
      user = req.params[key];
      break;
    }
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