import { Router } from "express";
var router = Router();

router.get("/test098/", function (req, res) {
  var map98 = {
    keyA: "some value",
    keyB: false,
    keyC: "safe",
  };
  res.cookie("SomeCookie", "Some Value", {
    secure: map98.keyB,
    httpOnly: true,
  });
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
