const db = require('../data/db-config.js');

function find() {
  return db('schemes')
}

function findById(id){
  return db('schemes').where({ id });
}

function findSteps(id) {
  return db("steps as st")
    .join("schemes as sc", "sc.id", "st.scheme_id")
    .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
    .where({ scheme_id: id })
    .orderBy("step_number");
}

function add(scheme) {
  return db('schemes').insert(scheme);
}

function update(changes, id){
  return db('schemes').where({ id }).update(changes);
}

function remove(id){
  return db('schemes').where({ id }).del();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}