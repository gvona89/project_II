/* 
 * Place all functions, classes, and/or DB Schemas here for a single 
 * model.
 */
const mongoose = require('./connection.js')

const grainSchema = mongoose.Schema({
  name: String
 
});

const grainCollection = mongoose.model('grain', grainSchema);


function getAllGrain() {
  return grainCollection.find();
}

function getGrain(grainId) {
  return grainCollection.findById(grainId);
}

function addNewGrain(newGrain) {
  return grainCollection.create(newGrain);
}

function getGrainByPantryId(pantryId) {
  return grainCollection.findById(pantryId);
}

function updateGrain(grainId, updatedGrain) {
  return grainCollection.updateOne({_id: grainId}, updatedGrain);
}

function deleteGrain(grainId) {
  return grainCollection.deleteOne({_id: grainId});
}

/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewGrain,
  // createpantry,
  deleteGrain,
  getGrain,
  getAllGrain,
  updateGrain,
  getGrainByPantryId
};
