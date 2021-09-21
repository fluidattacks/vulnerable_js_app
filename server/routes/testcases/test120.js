import { Router } from "express";
var CryptoJS = require("crypto-js");
var router = Router();

router.get("/test120/:target", function (req, res) {
  const keyString = "*4wQZgn+U2RW_mb=";

  let parameters = req.params;
  let target = parameters["target"];

  let encrypted = CryptoJS.AES.encrypt(target, keyString, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
  res.json({ encrypted: encrypted });
});

export default router;
