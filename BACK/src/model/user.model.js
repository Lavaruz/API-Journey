const User = require("./user.mongo");

async function getAllUser() {
  return await User.find();
}

async function addUser(data) {
  return await User.create(data);
}

module.exports = {
  getAllUser,
  addUser,
};
