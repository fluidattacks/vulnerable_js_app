import { Router } from "express";
import Environment from "../../helpers/environment";
var router = Router();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: Environment.db.host,
  user: Environment.db.username,
  password: Environment.db.password,
  database: Environment.db.database,
});

router.get("/test168/", function (req, res) {
  if (connection.state != "connected" && connection.state != "authenticated") {
    connection.connect();
  }
  connection.resume();

  let userData = req.body;

  let userName = userData.username;
  let password = userData.password;
  let statement = `SELECT * FROM users WHERE user_name=? AND password=?`;
  connection.query(
    {
      sql: statement,
      values: [userName, password],
    },
    function (error, results, fields) {
      connection.pause();
      if (error) {
        res.status(500).json({ error: error });
      }
      res.json({ ok: results.length > 0 });
    }
  );
});

export default router;
