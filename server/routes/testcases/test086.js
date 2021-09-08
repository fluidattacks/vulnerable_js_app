import { Router } from "express";
var router = Router();

router.get("/test086/:user", function (req, res) {
  var user = "";
  var parameters = req.params;
  if (parameters["user"] != undefined) {
    user = parameters["user"];
  }
  let allowed = ["a", user];
  allowed.pop();
  allowed[1] = "safe";
  allowed[1] = user;
  allowed.pop();
  allowed.push = "safe";
  user = decodeURI(allowed[1]);

  var user = req.params["user"];
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
