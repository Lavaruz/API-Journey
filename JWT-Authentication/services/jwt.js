const { sign, verify } = require("jsonwebtoken");

function createToken(user) {
  const accessToken = sign(
    { id: user._id, username: user.username },
    "SECRETJWT"
  );
  return accessToken;
}

function verifyToken(req, res, next) {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) {
    return res.json({ error: "user not authenticated" });
  }

  try {
    const verifyToken = verify(accessToken, "SECRETJWT");
    if (verifyToken) {
      req.authenticated = true;
      next();
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

module.exports = { createToken, verifyToken };
