const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");
const pool = require("../components/connection");

// add new patient
router.get("/all", (req, res) => {
  const query = `SELECT * from patient`;

  pool.query(query, (err, result) => {
    if (err) {
      console.log(err.message);
    } else {
      console.table(result.rows);
      res.send(result.rows);
    }
  });
});

// router.post("/", async (req, res) => {
//   const scheama = {
//     f_name: Joi.string().min(2).required(),
//     l_name: Joi.string().min(2).required(),
//     dob: Joi.string().required(),
//     gender: Joi.string().required(),
//     address: Joi.string().min(3).required(),
//     id: Joi.string().min(5).required(),
//     tel: Joi.string(),
//   };

//   const result = Joi.validate(req.body, scheama);
//   if (result.error) {
//     console.log(result.error.details[0].message);
//     res.status(400).send(result.error.details[0].message);
//     console.log(result.error.details[0].message);
//     return;
//   }

//   const { f_name, l_name, gender, dob, address, id, tel } = req.body;
//   const values = [f_name, l_name, dob, gender, address, id, tel];
//   const query = `INSERT INTO patient(f_name, l_name, dob, gender,address,id,tel)VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *`;
//   try {
//     const result = await pool.query(query, values);
//     res.status(200).send(result.rows);
//   } catch (error) {
//     console.log(error.message);
//     res.status(400).send(error.message);
//   }
// });

router.post("/", async (req, res, next) => {
  const scheama = {
    f_name: Joi.string().min(2).required(),
    l_name: Joi.string().min(2).required(),
    dob: Joi.string().required(),
    gender: Joi.string().required(),
    address: Joi.string().min(3).required(),
    id: Joi.string().min(5).required(),
    tel: Joi.string(),
  };

  const result = Joi.validate(req.body, scheama);
  if (result.error) {
    console.log(result.error.details[0].message);
    res.status(400).send(result.error.details[0].message);
    console.log(result.error.details[0].message);
    return;
  }

  const { f_name, l_name, gender, dob, address, id, tel } = req.body;
  const values = [f_name, l_name, dob, gender, address, id, tel];
  const query = `INSERT INTO patient(f_name, l_name, dob, gender,address,id,tel)VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *`;

  const result1 = await pool.query(query, values);
  res.status(200).send(result1.rows);
  // no need to add try catchs because express async errors monkypatchs the middleware
});

//file upload

module.exports = router;
