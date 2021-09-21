import { Router } from "express";
import * as crypto from "crypto";
var router = Router();

router.get("/test110/:target", function (req, res) {
  const keyString = "*4wQZgn+U2RW_mb=";
  const key = Buffer.from(keyString.substring(0, 8));
  const cipher = crypto.createCipheriv("rc4", key, "");

  let parameters = req.params;
  let target = parameters["target"];

  let encrypted = "";
  cipher.on("readable", () => {
    let chunk;
    while (null !== (chunk = cipher.read())) {
      encrypted += chunk.toString("hex");
    }
  });
  cipher.on("end", () => {
    res.json({ encrypted: encrypted });
  });

  cipher.write(target);
  cipher.end();
});

export default router;
