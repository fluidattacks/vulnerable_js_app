var express = require("express");
var router = express.Router();

router.get("/test080/:user", function (req, res) {
  var user = "";
  user = req.params["user"];
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
