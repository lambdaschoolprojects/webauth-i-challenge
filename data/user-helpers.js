const knex = require("knex");
const knexConfig = require("../knexfile").development;

const db = knex(knexConfig);

/**
 * Gets all users in the db
 * @returns {array} an array of all users
 */
const getUsers = () => {
  return db("users");
};

/**
 * Gets a single user in the db
 * @param {number} id
 * @returns {object} a user with the matching id, if one exists
 */
const getUser = id => {
  return db("users").where({ id });
};

/**
 *
 * @param {object} user
 * @returns {number} id of inserted user
 */
const addUser = async user => {
  const result = await db("users").insert(user);

  return result[0];
};

/**
 * Deletes a user from the db
 * @param {number} id
 * @returns {number} the number of rows deleted
 */
const deleteUser = async id => {
  return await db("users")
    .where({ id })
    .delete();
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  deleteUser
};
