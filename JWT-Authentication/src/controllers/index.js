const User = require("../models/user");
const bcrypt = require("bcrypt");
const { createToken } = require("../../services/jwt");
const validator = require("validator");

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
      const accessToken = createToken(user);
      res.cookie("access-token", accessToken, {
        maxAge: 300000,
        httpOnly: true,
      });
      return res.json("SUCCESS TO LOGIN");
    }
  });
}

module.exports = {
  registerUser,
  loginUser,
};
