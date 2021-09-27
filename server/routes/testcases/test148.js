import { Router } from "express";
var router = Router();

router.get("/test148", function (req, res) {
  let key = Math.random().toString();
  res.cookie("rememberKey", key);
  res.json({ ok: true });
});

export default router;
