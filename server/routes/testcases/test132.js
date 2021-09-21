import { Router } from "express";
var router = Router();
const { generateKeyPair } = require("crypto");

router.get("/test132", function (req, res) {
  let key_options = {
    namedCurve: "secp192k1",
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  };
  generateKeyPair("ec", key_options, (err, publicKey, privateKey) => {
    if (err) console.log("Error!", err);
    res.send(publicKey);
  });
});

export default router;
