const knex = require('knex');
const knexConfig = require('../knexfile').development;

const db = knex(knexConfig);

const getUsers = () => {
    return null;
}

module.exports = {
    getUsers
};