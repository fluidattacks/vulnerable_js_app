import { Router } from 'express';
import consign from 'consign';
var router = Router();
var files = consign({
    cwd: 'dist-server/routes'
  })
  .include('testcases')._files;
for (var file of files) {
  import(file).then(mod => {
    router.use(mod.default);
  })
}

export default router;
