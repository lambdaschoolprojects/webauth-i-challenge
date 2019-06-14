const validateCredentials = (req, res, next) => {
  let { username, password } = req.headers;

  const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,99}$/;
  const validUser = /^[a-z0-9_-]{3,16}$/i;

  if (!password.match(validPass))
    return res.status(400).json({
      message:
        "Password needs to be at least 6 characters with both letters and numbers and one upperase letter."
    });

  if (!username.match(validUser))
    return res.status(400).json({
      message:
        "Username should contain only letters, numbers, underscores, or hyphens."
    });
  next();
};

module.exports = validateCredentials;
