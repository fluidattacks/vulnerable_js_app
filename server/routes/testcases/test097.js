import { Router } from "express";
var router = Router();

router.get("/test097/", function (req, res) {
  var secure = false;
  res.cookie("SomeCookie", "Some Value", { secure: secure, httpOnly: true });
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
