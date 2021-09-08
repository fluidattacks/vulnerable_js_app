import { Router } from "express";
var router = Router();

router.get("/test087/:user", function (req, res) {
  var param = req.params["user"];
  let list75 = ["safe", "safe", param];
  list75.shift();
  list75.push("safe");
  var user = list75[1];
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
