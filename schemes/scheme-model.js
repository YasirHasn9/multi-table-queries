const db = require("../data/config");

module.exports = {
  find,
  findById,
  findSteps
};
function find() {
  return db("schemes");
}
function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}
function findSteps(id) {
  return db("steps")
    .join("schemes", "schemes.id", "steps.scheme_id")
    .where({ scheme_id: id });
}
