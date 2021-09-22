import { Router } from "express";
const crypto = require("crypto");
var router = Router();

router.get("/test140/:target", function (req, res) {
  let target = req.params["target"];
  const hash = crypto.createHash("md5");

  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      res.json({ hash: data.toString("hex") });
    }
  });
  hash.write(target);
  hash.end();
});

export default router;
