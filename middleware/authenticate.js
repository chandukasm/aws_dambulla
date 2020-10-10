const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Access denied!.No Token provided");
  }

  try {
    // const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    const decoded = jwt.verify(token, "jwtPrivateKey");
    // console.log("this is the decoded payload" + decoded);
    req.user = decoded; //sending the decoded user to the rest api end point
    next();
  } catch (ex) {
    res.status(400).send("invalid token");
    console.log(ex);
  }
};
