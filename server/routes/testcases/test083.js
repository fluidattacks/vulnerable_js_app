import { Router } from "express";
var router = Router();

router.get("/test083/:user", function (req, res) {
  var param = req.params["user"];

  var user = "";
  var map64 = {
    keyA: "a_Value",
    keyB: param,
    keyC: "c_value",
  };

  var user = map64.keyB;

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
