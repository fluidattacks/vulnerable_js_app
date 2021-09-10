import { Router } from "express";
var router = Router();

router.get("/test103/", function (req, res) {
  res.cookie("SomeCookie", "Some Value", { secure: 0 == 0, httpOnly: true });
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
