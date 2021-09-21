import { Router } from "express";
import * as crypto from "crypto";
var router = Router();

router.get("/test113/:target", function (req, res) {
  const algorithm = "aes-256-cfb";
  const keyString = "*wC!*f--xCFwUaUpLT%eSu2wnJ+ms%ac";
  const key = Buffer.alloc(32, keyString);
  const iv = Buffer.alloc(16);
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
