import { Router } from "express";
var router = Router();

router.get("/test090/:user", function (req, res) {
  var user = "";
  var parameters = req.params;
  if (req.params["user"] != undefined) {
    user = parameters["user"];
  }
  let allowed = ["a", user];
  allowed.pop();
  allowed[1] = "safe";
  allowed.pop();
  allowed[1] = user;
  var user = decodeURI(allowed[1]);

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
