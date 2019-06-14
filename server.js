const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const session = require("express-session");

const keys = require("./keys/keys");
const requireLogin = require("./middleware/requireLogin");

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger("dev"));

server.use(
  session({
    name: "user-session",
    secret: keys.cookieKey,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // one week
      secret: true
    },
    resave: false,
    saveUninitialized: false
  })
);

server.get("/", (req, res) => {
  res.send("<h1>I'm here</h1>");
});

server.use("/api/users", requireLogin, userRoutes);
server.use("/api/auth", authRoutes);

module.exports = server;
