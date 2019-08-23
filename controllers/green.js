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
const greenApi = require('../models/green.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from issueRouter to something that makes sense. (e.g:
 * `issueRouter`)
 */
const greenRouter = express.Router()


/* Step 4
 * 
 */
greenRouter.get('/', function (req, res) {
  greenApi.getAllGreen()
    .then(green => {
      // console.log(issues)
      res.render('green/green', { allgreen: green })
    })
})

greenRouter.get('/new', function (req, res) {
  res.render('green/newGreen', {});
})

greenRouter.get('/:greenId/edit', function (req, res) {
  greenApi.getGreen(req.params.greenId)
    .then(green => {
      // console.log(issues)
      res.render('green/editGreen', { green: green })
    })
})

greenRouter.post('/', function (req, res) {
  const newGreen = req.body
  greenApi.addNewGreen(newGreen)
    .then(() => {
      res.redirect('/green')
    })
    .catch((error) => {
      res.send(error)
    })
})

// issueRouter.put('/', function(req,res){
greenRouter.put('/:greenId', function (req, res) {
  greenApi.updateGreen(req.params.greenId, req.body)
    .then(() => {
      // res.send('updated');
      res.redirect('/green');
    })
})

greenRouter.delete('/:greenId', function (req, res) {
  greenApi.deleteGreen(req.params.greenId)
    .then(() => {
      // res.send('green deleted');
      res.redirect('/green');
    })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  greenRouter
}

