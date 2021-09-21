import { Router } from "express";
var router = Router();
const { generateKeyPair } = require("crypto");

router.get("/test134", function (req, res) {
  generateKeyPair(
    "ec",
    {
      namedCurve: "secp192k1",
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
      },
    },
    (err, publicKey, privateKey) => {
      if (err) console.log("Error!", err);
      res.send(publicKey);
    }
  );
});

export default router;
