/* 
 * Place all functions, classes, and/or DB Schemas here for a single 
 * model.
 */
const mongoose = require('./connection.js')

const pantrySchema = mongoose.Schema({
  name: String,
  description: String,
  createdAt: Date,
  status: String,
  priority: String
});

const pantryCollection = mongoose.model('pantry', pantrySchema);

// function createpantry() {
//   return {
//     name: "",
//     employees: 0,
//     currentlyOpen: false
//   };
// }

function getAllPantry() {
  return pantryCollection.find();
}

function getPantry(pantryId) {
  return pantryCollection.findById(pantryId);
}

function addNewPantry(newPantry) {
  return pantryCollection.create(newPantry);
}

function updatePantry(pantryId, updatedPantry) {
  return pantryCollection.updateOne({_id: pantryId}, updatedpantry);
}

function deletePantry(pantryId) {
  return pantryCollection.deleteOne({_id: pantryId});
}

/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewPantry,
  // createpantry,
  deletePantry,
  getPantry,
  getAllPantry,
  updatePantry
};
