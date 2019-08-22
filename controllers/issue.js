/* Step 1 import express
 *
 */
const express = require('express')


/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `issuesApi` to something more sensible (e.g:
 * `issuesAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const issuesApi = require('../models/issue.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from issueRouter to something that makes sense. (e.g:
 * `issueRouter`)
 */
const issueRouter = express.Router()


/* Step 4
 * 
 */
issueRouter.get('/', function (req, res) {
  issuesApi.getAllIssues()
    .then(issues => {
      // console.log(issues)
      res.render('issues/issues', { allissues: issues })
    })
})

issueRouter.get('/new', function (req, res) {
  res.render('issues/newIssueForm', {});
})

issueRouter.get('/:issueId/edit', function (req, res) {
  issuesApi.getIssue(req.params.issueId)
    .then(issue => {
      // console.log(issues)
      res.render('issues/editIssueForm', { issue: issue })
    })
  // const issueId = req.params.issueId
  // console.log(issueId)
  // issuesApi.findById(issueId)
  // .then((issue)=>{
  //   res.render("issues/edit", {
  //     issue: issue
  //   })
  // })
})

issueRouter.post('/', function (req, res) {
  // console.log('req.body', req.body)
  // issuesApi.addNewIssue(req.body)
  //   .then(() => {
  //   res.redirect('/issues')
  //   // res.send('issue created');
  //   })
  const newIssue = req.body

  issuesApi.addNewIssue(newIssue)
    .then(() => {
      res.redirect('/issues')
    })
    .catch((error) => {
      res.send(error)
    })
})

// issueRouter.put('/', function(req,res){
issueRouter.put('/:issueId', function (req, res) {
  issuesApi.updateIssue(req.params.issueId, req.body)
    .then(() => {
      // res.send('updated');
      res.redirect('/issues');
    })
})

issueRouter.delete('/:issueId', function (req, res) {
  issuesApi.deleteIssue(req.params.issueId)
    .then(() => {
      res.send('issue deleted');
      // res.redirect('/issue');
    })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  issueRouter
}

