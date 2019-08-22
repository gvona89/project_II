/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */
const mongoose = require('./connection.js')

const issueSchema = mongoose.Schema({
  name: String,
  description: String,
  createdAt: Date,
  status: String,
  priority: String
});

const issueCollection = mongoose.model('issue', issueSchema);

// function createIssue() {
//   return {
//     name: "",
//     employees: 0,
//     currentlyOpen: false
//   };
// }

function getAllIssues() {
  return issueCollection.find();
}

function getIssue(issueId) {
  return issueCollection.findById(issueId);
}

function addNewIssue(newIssue) {
  return issueCollection.create(newIssue);
}

function updateIssue(issueId, updatedIssue) {
  return issueCollection.updateOne({_id: issueId}, updatedIssue);
}

function deleteIssue(issueId) {
  return issueCollection.deleteOne({_id: issueId});
}

/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewIssue,
  // createIssue,
  deleteIssue,
  getIssue,
  getAllIssues,
  updateIssue
};
