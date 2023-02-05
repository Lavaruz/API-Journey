const User = require("../models/user");
const bcrypt = require("bcrypt");
const { createToken } = require("../../services/jwt");

async function registerUser(req, res) {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then(async (hash) => {
    try {
      await User.find({
        username: username,
        password: hash,
      });
      res.json("REGISTER SUCCESS");
    } catch (err) {
      res.status(400).json({ error: err });
    }
  });
}

async function loginUser(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (!user) return res.json({ error: "user not found" });

  await bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      return res.json({ error: "wrong user and password combination!" });
    } else {
      const accessToken = createToken(user);
      res.cookie("access-token", accessToken, {
        maxAge: 30000,
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
