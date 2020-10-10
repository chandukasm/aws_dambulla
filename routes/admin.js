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

// //adding a new user
// router.post("/", async (req, res) => {
//   const schema = {
//     first_name: Joi.string()
//       .min(3)
//       .required(),
//     last_name: Joi.string()
//       .min(2)
//       .required(),
//     email: Joi.string()
//       .email()
//       .required(),
//     password: Joi.string().required(),
//     role: Joi.string().required()
//   };

//   const result = Joi.validate(req.body, schema);
//   //   console.log(result);
//   if (result.error) {
//     res.status(400).send(result.error.details[0].message);
//     return;
//   }

//   const first_name = req.body.first_name;
//   const last_name = req.body.last_name;
//   const email = req.body.email;
//   const password = req.body.password;
//   const salt = await bc.genSalt(10);
//   const pw = await bc.hash(password, salt);
//   const role = req.body.role;
//   const values = [first_name, last_name, email, pw, role];
//   // console.log("these are the values : " + values);

//   pool.query(
//     "INSERT INTO staff (first_name,last_name,email,password,role) VALUES($1,$2,$3,$4,$5) RETURNING *",
//     values,
//     (err, result) => {
//       if (err) {
//         res.status(400).send(err.message);
//       } else {
//         const tokenUser = result.rows[0];

//         console.log(token);
//         res.header("x-auth-token", token).send(result.rows);
//       }
//       client.end();
//     }
//   );
// });

// router.get("/", auth, (req, res) => {
//   pool.query("SELECT * from staff", (err, result) => {
//     if (err) {
//       console.log(err.message);
//     }
//     res.send(result.rows);
//     client.end();
//   });
// });

// module.exports = router;
