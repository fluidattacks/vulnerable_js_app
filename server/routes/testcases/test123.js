import { Router } from "express";
var router = Router();
const { generateKeyPair } = require("crypto");

router.get("/test123", function (req, res) {
  generateKeyPair(
    "rsa",
    {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
        //cipher: "aes-256-cbc", //Optional
        //passphrase: "", //Optional
      },
    },
    (err, publicKey, privateKey) => {
      if (err) console.log("Error!", err);
      res.send(publicKey);
    }
  );
});

export default router;
