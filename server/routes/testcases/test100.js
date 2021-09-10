import { Router } from "express";
var router = Router();

router.get("/test100/", function (req, res) {
  let list100 = ["safe", "safe", false, "safe"];
  list100.shift();
  list100.push("safe");
  var _secure = list100[1];
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
