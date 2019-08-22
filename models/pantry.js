/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */
const mongoose = require('./connection.js')

const pantrychema = mongoose.Schema({
  name: String,
  description: String,
  createdAt: Date,
  status: String,
  priority: String
});

const pantryCollection = mongoose.model('pantry', pantrychema);

// function createpantry() {
//   return {
//     name: "",
//     employees: 0,
//     currentlyOpen: false
//   };
// }

function getAllpantry() {
  return pantryCollection.find();
}

function getpantry(pantryId) {
  return pantryCollection.findById(pantryId);
}

function addNewpantry(newpantry) {
  return pantryCollection.create(newpantry);
}

function updatepantry(pantryId, updatedpantry) {
  return pantryCollection.updateOne({_id: pantryId}, updatedpantry);
}

function deletepantry(pantryId) {
  return pantryCollection.deleteOne({_id: pantryId});
}

/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewpantry,
  // createpantry,
  deletepantry,
  getpantry,
  getAllpantry,
  updatepantry
};
