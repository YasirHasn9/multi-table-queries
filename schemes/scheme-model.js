const db = require("../data/config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
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

function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(ids => findById(ids[0]).first());
}

async function update(changes, id) {
  await db("schemes")
    .where({ id })
    .update(changes);
  return findById(id);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
