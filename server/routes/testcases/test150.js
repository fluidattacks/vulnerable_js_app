import { Router } from "express";
var router = Router();
import { randomInt } from "crypto";

router.get("/test150", function (req, res) {
  let a = true;
  let key = "";
  if (a) {
    key = randomInt(0, 10000000).toString();
  } else {
    key = Math.random().toString();
  }
  res.cookie("rememberKey", key);
  res.json({ ok: true });
});

export default router;
