const User = require("../models/user");
const bcrypt = require("bcrypt");

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

async function loginUser(req, res) {}

module.exports = {
  registerUser,
};
