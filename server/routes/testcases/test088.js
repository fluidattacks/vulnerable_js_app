import { Router } from "express";
var router = Router();

router.get("/test088/:user", function (req, res) {
  var user = req.params["user"];
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-XSS-Protection", "0");
  var map88 = {
    ok: false,
  };

  if (map88.ok) {
    var temple = `
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Hello ${user}</h1>
      </body>
    </html>
`;
  } else {
    var temple = `
  <!DOCTYPE html>
  <html>
    <body>
      <h1>Hello Jane Doe</h1>
    </body>
  </html>
`;
  }
  res.send(temple);
});

export default router;
