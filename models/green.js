/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */
const mongoose = require('./connection.js')

const greenSchema = mongoose.Schema({
  name: String
});

const greenCollection = mongoose.model('green', greenSchema);


function getAllGreen() {
  return greenCollection.find();
}

function getGreen(greenId) {
  return greenCollection.findById(greenId);
}

function addNewGreen(newGreen) {
  return greenCollection.create(newGreen);
}

function updateGreen(greenId, updatedGreen) {
  return greenCollection.updateOne({_id: greenId}, updatedGreen);
}

function deleteGreen(greenId) {
  return greenCollection.deleteOne({_id: greenId});
}

/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewGreen,
  deleteGreen,
  getGreen,
  getAllGreen,
  updateGreen
};
