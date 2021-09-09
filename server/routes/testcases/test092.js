import { Router } from "express";
var router = Router();

router.get("/test092/:user", function (req, res) {
  var param = req.params["user"];

  var user = param ? param : "Jane Doe";
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
