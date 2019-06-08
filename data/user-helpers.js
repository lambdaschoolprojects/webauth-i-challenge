const knex = require("knex");
const knexConfig = require("../knexfile").development;

const db = knex(knexConfig);

const getUsers = () => {
  return db("users");
};

const getUser = id => {
  return null;
};

const addUser = user => {
  return null;
};

const deleteUser = user => {
  return null;
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  deleteUser
};
