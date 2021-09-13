import { Router } from "express";
var router = Router();
const { generateKeyPair } = require("crypto");

router.get("/test130", function (req, res) {
  let key_options = {
    modulusLength: 1024,
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
  };
  generateKeyPair("rsa", key_options, (err, publicKey, privateKey) => {
    if (err) console.log("Error!", err);
    res.send(publicKey);
  });
});

export default router;
