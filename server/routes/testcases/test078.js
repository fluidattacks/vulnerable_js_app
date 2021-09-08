import { Router } from "express";
var router = Router();

router.get("/test078/:user", function (req, res) {
  var param = req.params["user"];

  var user = "Jane Doe";
  if (32 > 31) {
    user = param;
  }
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
