import { Router } from "express";
import Environment from "../../helpers/environment";
var router = Router();
import * as mysql_db from "mysql";

const pool_config = {
  host: Environment.db.host,
  user: Environment.db.username,
  password: Environment.db.password,
  database: Environment.db.database,
};

let cluster = mysql_db.createPoolCluster();
cluster.add(pool_config);

router.get("/test165/", function (req, res) {
  let userData = req.body;

  let userName = userData.username;
  let password = userData.password;
  let query = `SELECT * FROM users WHERE user_name='${userName}' AND password='${password}'`;
  cluster.getConnection((error, connection) => {
    connection.resume();
    connection.query(query, function (error, results, fields) {
      connection.pause();
      if (error) {
        res.status(500).json({ error: error });
      }
      res.json({ ok: results.length > 0 });
    });
  });
});

export default router;
