import { Router } from "express";
var router = Router();
const { generateKeyPair } = require("crypto");

router.get("/test135", function (req, res) {
  generateKeyPair(
    "ec",
    {
      namedCurve: "prime256v1",
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
