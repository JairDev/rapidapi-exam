var express = require("express");
var router = express.Router();
const users = require("../data/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ users });
});

module.exports = router;
