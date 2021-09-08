import { Router } from "express";
var router = Router();

router.get("/test081/:user", function (req, res) {
  var param = req.params["user"];
  var user = "";

  var guess = "ABC";
  var switchTarget = guess[2];

  switch (switchTarget) {
    case "A":
      user = param;
      break;
    case "B":
      user = "bobs_your_uncle";
      break;
    case "C":
    case "D":
      user = param;
      break;
    default:
      uer = "bobs_your_uncle";
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
