const {
  exec
} = require("child_process");
var express = require('express');
var router = express.Router();

router.get('/test012/:user', function (req, res) {
  var user_files = [];
  var user = "";
  for (var user of Object.values(req.params)) {
    exec("ls target/user_files/" + user + "/", (error, stdout, stderr) => {

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
  }
});

module.exports = router;
