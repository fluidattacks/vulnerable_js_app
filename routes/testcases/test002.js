const {
  spawn
} = require("child_process");
var express = require('express');
var router = express.Router();

router.get('/test002/:user', function (req, res) {
  var user = req.params['user'];

  const ls = spawn("ls", ["test/test_files/users/" + user + "/"]);

  ls.stdout.on("data", data => {
    var user_files = [];

    for (file of data.toString().split('\n')) {
      if (file) {
        user_files.push(file);
      }
    }

    var data = {
      'user_files': user_files
    };
    res.json(data);

  });
  ls.stderr.on("data", data => {
    res.status(400).json({
      'error': data.toString()
    });
  });
});

module.exports = router;
