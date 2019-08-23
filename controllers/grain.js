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
const grainApi = require('../models/grain.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from issueRouter to something that makes sense. (e.g:
 * `issueRouter`)
 */
const grainRouter = express.Router()


/* Step 4
 * 
 */
grainRouter.get('/', function (req, res) {
  grainApi.getAllGrain()
    .then(grain => {
      // console.log(issues)
      res.render('grain/grain', { allgrain: grain })
    })
})

grainRouter.get('/new', function (req, res) {
  res.render('grain/newGrain', {});
})

grainRouter.get('/:grainId/edit', function (req, res) {
  grainApi.getGrain(req.params.grainId)
    .then(issue => {
      // console.log(issues)
      res.render('grain/editGrain', { grain: grain })
    })
})

grainRouter.post('/', function (req, res) {
  const newGrain = req.body
  grainApi.addNewGrain(newGrain)
    .then(() => {
      res.redirect('/grain')
    })
    .catch((error) => {
      res.send(error)
    })
})

// issueRouter.put('/', function(req,res){
grainRouter.put('/:grainId', function (req, res) {
  grainApi.updateGrain(req.params.grainId, req.body)
    .then(() => {
      // res.send('updated');
      res.redirect('/grain');
    })
})

grainRouter.delete('/:grainId', function (req, res) {
  grainApi.deleteGrain(req.params.grainId)
    .then(() => {
      res.send('grain deleted');
      // res.redirect('/issue');
    })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  grainRouter
}

