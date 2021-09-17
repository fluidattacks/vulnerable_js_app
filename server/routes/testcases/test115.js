import { Router } from "express";
var CryptoJS = require("crypto-js");
var router = Router();

router.get("/test115/:target", function (req, res) {
  const keyString = "*4wQZgn+U2RW_mb=";

  let parameters = req.params;
  let target = parameters["target"];

  let encrypted = CryptoJS.DES.encrypt(target, keyString).toString();
  res.json({ encrypted: encrypted });
});

export default router;
