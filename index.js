const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("./routes/admin");
const auth = require("./routes/auth");
const traveler = require("./routes/traveler");
const config = require("config");
const pool = require("./components/connection");
const patient = require("./routes/Patients");
const mid = require("./components/prod");
const multer = require("multer");
// const { Client } = require("pg");
// const connectionString = "postgresql://postgres:eleos@localhost:5432/test";

// const group = require("./routes/group");

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// const client = new Client({
//   connectionString: connectionString
// });
// client.connect();
mid(app);
const createScript = [
  "CREATE TABLE IF NOT EXISTS public.vacations (id int NOT NULL ,name varchar(255) NOT NULL )",
  " CREATE TABLE IF NOT EXISTS patient (index SERIAL  ,created TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,f_name Varchar not null ,l_name varchar not null,gender varchar(5)not null , address varchar , id varchar primary key not null,dob timestamptz not null,tel varchar(20) )",
];

execute = () => {
  try {
    createScript.map(async (query) => {
      const result = await pool.query(query);
      console.log(result.rows);
    });
  } catch (error) {
    console.error(error);
  }
};

//run only once
// execute();

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/api/admin", admin);
// app.use("/api/auth", auth);
// app.use("/api/traveler", traveler);
app.use("/api/patient", patient);
// app.use("/api/group", group);

// if (!config.get("jwtPrivateKey")) {
//   console.error("FATEL ERROR: JWT PRIVATE KEY NOT DEFINED");
//   process.exit(1);
// }

app.get("/", (req, res) => {
  res.send("your request recieved welcome to base hospitl Dambulla!");
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${req.headers.sender}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage });

app.post("/uploadfile", upload.single("file"), (req, res, next) => {
  const file = req.file;

  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  return res
    .status(200)
    .send(
      `file successflully uploaded as ${req.headers.sender}_${file.originalname}`
    );
});

// app.get("/all", (req, res) => {
//   res.send("all the systems");
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listining on ${port}...`);
});
