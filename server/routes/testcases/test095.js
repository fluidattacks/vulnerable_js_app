import { Router } from "express";
var router = Router();

router.get("/test077/:user", function (req, res) {
  var param = req.params["user"];

  var param = req.params["user"];
  var guess = "ABC";
  var switchTarget = guess[1];

  switch (switchTarget) {
    case "A":
      user = param;
      break;
    case "B":
      user = "Jane Doe";
      break;
    case "C":
    case "D":
      user = param;
      break;
    default:
      uer = "Danny";
      break;
  }

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
