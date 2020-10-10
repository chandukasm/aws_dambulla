// const express = require("express");
// const router = express.Router();
// const { Pool, Client } = require("pg");
// const connectionString = "postgresql://postgres:eleos@localhost:5432/travel";
// const bc = require("bcrypt");
// const Joi = require("joi");
// const jwt = require("jsonwebtoken");
// const config = require("config");
// const auth = require("../middleware/authenticate");

// const pool = new Pool({
//   connectionString: connectionString
// });

// const client = new Client({
//   connectionString: connectionString
// });
// client.connect();

// // get all travelers
// router.get("/all", auth, (req, res) => {
//   const query = `SELECT * from traveler`;
//   console.log(query);
//   pool.query(query, (err, result) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.table(result.rows);
//       res.send(result.rows);
//       client.end();
//     }
//   });
// });

// module.exports = router;
