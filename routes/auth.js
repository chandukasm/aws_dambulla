// const express = require("express");
// const router = express.Router();
// const { Pool, Client } = require("pg");
// const connectionString = "postgresql://postgres:eleos@localhost:5432/travel";
// const bc = require("bcrypt");
// const Joi = require("joi");
// const jwt = require("jsonwebtoken");
// const config = require("config");

// const pool = new Pool({
//   connectionString: connectionString
// });

// const client = new Client({
//   connectionString: connectionString
// });
// client.connect();

// //login
// router.get("/", async (req, res) => {
//   const email = req.body.email;
//   password = req.body.password;

//   //request validation
//   const schema = {
//     email: Joi.string()
//       .email()
//       .required(),
//     password: Joi.string().required()
//   };

//   const result = Joi.validate(req.body, schema);

//   if (result.error) {
//     res.status(400).send(result.error.details[0].message);
//     return;
//   }
//   //request validation//

//   const values = [email];
//   const user = await pool.query("SELECT * FROM staff WHERE email=$1 ", values);
//   if (user.rowCount === 0) {
//     res.status(400).send("invalid email or password");
//     return;
//   }
//   const tokenUser = user.rows[0];
//   const sent_password = user.rows[0].password;
//   const validPassword = await bc.compare(req.body.password, sent_password);
//   if (validPassword) {
//     //generating the jsonwebtoken,{expiresIn:10}
//     // const token = jwt.sign(
//     //   tokenUser,
//     //   config.get("jwtPrivateKey", { expiresIn: 60 })
//     // );

//     const token = jwt.sign(tokenUser, config.get("jwtPrivateKey"));
//     //generating the jsonwebtoken

//     // res.status(200).send("you are logged in");
//     res
//       .header("x-auth-token", token)
//       .status(200)
//       .send(token);
//   } else {
//     res.status(400).send("forbidden");
//   }
// });

// module.exports = router;
