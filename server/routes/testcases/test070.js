var express = require("express");
var router = express.Router();
const fs = require("fs");

router.get("/test070/", function (req, res) {
  var user = req.query["user"];
  var fileName = req.query["fileName"];
  var filePath = `target/user_files/${user}/${fileName}.yaml`;
  if (user && fileName) {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.status("404").json({
          error: "file does not exists ",
        });
      }
      res.send(data);
    });
  } else {
    res.status("404").json({
      error: "file does not exists ",
    });
  }
});

module.exports = router;
