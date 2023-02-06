const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(user) {
  return sign(
    { id: user._id, email: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15s",
    }
  );
}

function verifyToken(req, res, next) {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) {
    return res.json({ error: "user not authenticated" });
  }

  try {
    const verifyToken = verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = verifyToken;
    if (verifyToken) {
      req.authenticated = true;
      next();
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

module.exports = { generateAccessToken, verifyToken };
