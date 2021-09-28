import { Router } from "express";
var router = Router();

router.get("/test154", function (req, res) {
  let key = "";
  var data = ["safe"];
  data.push("safe");
  data.push(Math.random().toString());
  data[3] = "safe";
  data.pop();

  for (var currentKey of data) {
    key = key.concat(currentKey);
  }

  res.cookie("rememberKey", key);
  res.json({ ok: true });
});

export default router;
