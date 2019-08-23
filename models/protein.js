/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */
const mongoose = require('./connection.js')

const proteinSchema = mongoose.Schema({
  name: String
});

const proteinCollection = mongoose.model('protein', proteinSchema);


function getAllProtein() {
  return proteinCollection.find();
}

function getProtein(proteinId) {
  return proteinCollection.findById(proteinId);
}

function addNewProtein(newProtein) {
  return proteinCollection.create(newProtein);
}

function updateProtein(proteinId, updatedProtein) {
  return proteinCollection.updateOne({_id: proteinId}, updatedProtein);
}

function deleteProtein(proteinId) {
  return proteinCollection.deleteOne({_id: proteinId});
}

/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewProtein,
  deleteProtein,
  getProtein,
  getAllProtein,
  updateProtein
};
