const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../../services/jwt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { email, password } = req.body;

  const emailValid = validator.isEmail(email);
  const passwordValid = validator.isStrongPassword(password, {
    minSymbols: 0,
  });
  if (emailValid && passwordValid) {
    bcrypt.hash(password, 10).then(async (hash) => {
      try {
        await User.findOneAndUpdate(
          {
            email: email,
          },
          {
            email: email,
            password: hash,
          },
          {
            upsert: true,
          }
        );
        res.json("REGISTER SUCCESS");
      } catch (err) {
        res.status(400).json({ error: err });
      }
    });
  } else {
    res.json({ error: "email or password invalid" });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) return res.json({ error: "user not found" });

  await bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      return res.json({ error: "wrong user and password combination!" });
    } else {
      const accessToken = generateAccessToken(user);
      const refreshToken = jwt.sign(
        { id: user._id, email: user.email },
        process.env.REFRESH_TOKEN_SECRET
      );
      res.cookie("access-token", accessToken);
      res.cookie("refresh-token", refreshToken, {
        httpOnly: true,
      });
      return res.json("SUCCESS TO LOGIN");
    }
  });
}

async function refreshToken(req, res) {
  const refreshToken = req.cookies["refresh-token"];
  if (refreshToken == null) return res.sendStatus(401);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken(user);
    res.cookie("access-token", accessToken);
    res.json("TOKEN REFRESHED");
  });
}

module.exports = {
  registerUser,
  loginUser,
  refreshToken,
};
