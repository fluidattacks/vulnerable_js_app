import { Router } from "express";
var router = Router();

router.get("/test077/:user", function (req, res) {
  var param = req.params["user"];

  let allowed = ["a", param];
  allowed.pop();
  allowed[1] = "safe";
  allowed.pop();
  allowed[1] = user;
  allowed.shift();
  allowed.push("Jane Doe");
  user = allowed[1];
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
