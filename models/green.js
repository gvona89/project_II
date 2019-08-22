/* 
 * Place all functions, classes, and/or DB Schemas here for a single 
 * model.
 */
const mongoose = require('./connection.js')

const pantrySchema = mongoose.Schema({
  name: String

});

const pantryCollection = mongoose.model('pantry', pantrySchema);



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
