const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "base_d",
//   password: "eleos",
//   port: 5432,
//   max: 20,
// });

// const pool = new Pool({
//   user: "nnammzahukkhag",
//   host: "ec2-54-160-120-28.compute-1.amazonaws.com",
//   database: "dhpcdaj8esln4",
//   password: "820c9aaf9732664ca6e0b1a779b3cdcde433c16c77a55f00971bd866585eb517",
//   port: 5432,
//   max: 20,
//   ssl: true,
// });

const pool = new Pool({
  user: "postgres",
  host: "dambulla.cz3wrdwn78xb.us-east-2.rds.amazonaws.com",
  database: "dambulla",
  password: "base_dambulla",
  port: 5432,
  max: 20,
  ssl: true,
});

module.exports = pool;
