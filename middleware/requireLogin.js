const requireLogin = (req, res, next) => {
  res.status(403).json({ message: "Not authorized" });
};

module.exports = requireLogin;
