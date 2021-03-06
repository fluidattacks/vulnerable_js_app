var express = require("express");
var router = express.Router();
const fs = require("fs");

router.get("/test020/:user/:fileName", function (req, res) {
  var user = req.params["user"];
  var fileName = req.params["fileName"];
  var filePath = `target/user_files/${user}/${fileName}`;
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.status("404").json({
        error: "file does not exists ",
      });
    }
    res.send(data);
  });
});

module.exports = router;
