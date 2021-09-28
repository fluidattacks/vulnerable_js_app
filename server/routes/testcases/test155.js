import { Router } from "express";
var router = Router();

router.get("/test155", function (req, res) {
  var data = ["safe", Math.random().toString()];

  res.cookie("rememberKey", data[1]);
  res.json({ ok: true });
});

export default router;
