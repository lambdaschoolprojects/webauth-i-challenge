const express = require("express");
const bcrypt = require("bcrypt");
const validateCredentials = require("../middleware/validateCredentials");
const db = require("../data/user-helpers");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("<h1>Auth Routes</h1>");
});

router.post("/register", validateCredentials, async (req, res) => {
  let { username, password } = req.headers;

  try {
    password = bcrypt.hashSync(password, 10);

    const user = await db.addUser({ username, password });

    if (user) return res.status(201).json({ message: "User created." });
    res.status(400).json({ message: "Unable to create user." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong." });
  }
});

module.exports = router;
