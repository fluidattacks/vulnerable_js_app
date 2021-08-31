import { Router } from 'express';
var router = Router();
import { readFile } from 'fs';

router.get('/test019/:user/:fileName', function (req, res) {
  var user = req.params['user'];
  var fileName = req.params['fileName'];
  var filePath = "target/user_files/" + user + "/" + fileName;
  readFile(filePath, 'utf-8', (err, data) => {
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

export default router;
