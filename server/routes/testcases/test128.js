import { Router } from "express";
import * as crypto from "crypto";
var router = Router();

router.get("/test128", function (req, res) {
  const bob = crypto.createECDH("sect193r1");
  const bobKey = bob.generateKeys();
  res.send(bobKey.toString("hex"));
});

export default router;
