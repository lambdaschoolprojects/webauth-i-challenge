const knex = require("knex");
const knexConfig = require("../knexfile").development;

const db = knex(knexConfig);

const getUsers = () => {
  return db("users");
};

const getUser = id => {
  return db("users").where({ id });
};

/**
 *
 * @param user
 * @returns id of inserted user
 */
const addUser = async user => {
  const result = await db("users").insert(user);
  console.log(result);

  return result[0];
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
