import { Router } from "express";
var router = Router();

router.get("/test091/:user", function (req, res) {
  var params = req.params;
  let param = params["user"];
  var user = "";
  if (param != undefined) {
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
