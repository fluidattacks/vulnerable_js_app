import { Router } from "express";
var router = Router();

router.get("/test079/:user", function (req, res) {
  var param = req.params["user"];

  var data = ["safe"];
  var string_name = "";
  data.push("safe");
  data.push(param);
  data[3] = "safe";
  data.pop();
  data.pop();

  for (var user of data) {
    string_name = string_name.concat(user);
  }

  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-XSS-Protection", "0");
  res.send(
    `
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Hello ${string_name}</h1>
      </body>
    </html>
`
  );
});

export default router;
