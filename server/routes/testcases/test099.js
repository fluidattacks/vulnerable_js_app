import { Router } from "express";
var router = Router();

router.get("/test099/", function (req, res) {
  var _secure = 1 != 1;
  res.cookie("SomeCookie", "Some Value", { secure: _secure, httpOnly: true });
  res.setHeader("Content-Type", "text/html");
  res.send(
    `
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Hello Jane Doe</h1>
      </body>
    </html>
`
  );
});

export default router;
