import { Router } from "express";
var router = Router();

router.get("/test094/:user", function (req, res) {
  var param = req.params["user"];
  var map64 = {
    keyA: "a_Value",
    keyB: "safe",
    keyC: "c_value",
  };
  var user = param;
  map64["keyB"] = user;
  map64.keyB = "Jane Doe";

  user = "Mr" + map64["keyB"];
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
