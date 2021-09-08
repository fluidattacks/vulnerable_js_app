import { exec } from "child_process";
import { Router } from "express";
var router = Router();

router.get("/test077/:user", function (req, res) {
  var user = req.params["user"];
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-XSS-Protection", "0");
  res.send(
    `
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Hello ${user}</h1>
      </body>
    </html>
`
  );
});

export default router;
