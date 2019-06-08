const requireLogin = (req, res) => {
  res.status(403).json({ message: "Not authorized" });
};

module.exports = requireLogin;
