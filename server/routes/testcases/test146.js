import { Router } from "express";
var { DOMParser } = require("xmldom");
var xpath = require("xpath");
let fs = require("fs");
var router = Router();

router.get("/test146/", function (req, res) {
  let userData = req.body;

  let userName = userData.username;
  let password = userData.password;

  fs.readFile("target/peopleDB.xml", (error, data) => {
    let authenticated = false;

    var doc = new DOMParser().parseFromString(data.toString());

    var findUserXPath = `//Employee[UserName/text()='${userName}' and Password/text()=$password]`;
    let badXPathExpr = xpath.parse(findUserXPath);

    let result = badXPathExpr.select({
      node: doc,
      variables: { password: password },
    });
    if (result.length > 0) {
      authenticated = true;
    }
    res.json({ ok: authenticated });
  });
});

export default router;
