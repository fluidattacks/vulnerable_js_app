import { Router } from "express";
var router = Router();

router.get("/test152", function (req, res) {
  let key = "";
  var map64 = {
    keyA: "a_Value",
    keyB: "safe",
    keyC: "c_value",
  };
  map64["keyB"] = Math.random().toString();
  key = map64.keyB;
  res.cookie("rememberKey", key);
  res.json({ ok: true });
});

export default router;
