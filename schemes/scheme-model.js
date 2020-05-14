const db = require("../data/config");

module.exports = {
  find,
  findById
};
function find() {
  return db("schemes");
}
function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}
