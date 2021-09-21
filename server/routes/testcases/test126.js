import { Router } from "express";
import * as crypto from "crypto";
var router = Router();

router.get("/test126", function (req, res) {
  const bob = crypto.createECDH("secp112r2");
  const bobKey = bob.generateKeys();
  res.send(bobKey.toString("hex"));
});

export default router;
