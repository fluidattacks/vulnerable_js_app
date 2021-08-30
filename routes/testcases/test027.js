var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/test027/:user/:fileName', function (req, res) {
  var user = req.params['user'];
  var fileName = req.params['fileName'];
  var filePath = path.join("target/user_files", user, `${fileName}.yaml`);
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status('404').json({
        'error': 'file does not exists '
      })
    }
    res.send(
      data
    )
  })
});

module.exports = router;
