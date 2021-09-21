import { Router } from "express";
var CryptoJS = require("crypto-js");
var router = Router();

router.get("/test119/:target", function (req, res) {
  const keyString = "*4wQZgn+U2RW_mb=";

  let parameters = req.params;
  let target = parameters["target"];

  let encrypted = CryptoJS.AES.encrypt(target, keyString, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.NoPadding,
  }).toString();
  res.json({ encrypted: encrypted });
});

export default router;
