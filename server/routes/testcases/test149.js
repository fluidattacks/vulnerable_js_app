import { Router } from "express";
var router = Router();

router.get("/test149", function (req, res) {
  let a = true;
  let key = "";
  if (a) {
    key = "secureValue";
  } else {
    key = Math.random().toString();
  }
  res.cookie("rememberKey", key);
  res.json({ ok: true });
});

export default router;
