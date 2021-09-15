import { Router } from "express";
import * as crypto from "crypto";
var router = Router();

router.get("/test106/:target", function (req, res) {
  const algorithm = "aes-192-cbc";
  const keyString = "*4wQZgn+U2RW_mb=";
  const iv = Buffer.alloc(16);
  const key = crypto.scryptSync(keyString, "salt", 24);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

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
