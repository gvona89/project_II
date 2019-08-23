/* Step 1 import express
 *`
 */
const express = require('express')


/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `pantryApi` to something more sensible (e.g:
 * `pantryAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const pantryApi = require('../models/pantry.js')
const grainApi = require('../models/grain.js')
// const pantryApi = require('../models/pantry.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from grainRouter to something that makes sense. (e.g:
 * `grainRouter`)
 */
const grainRouter = express.Router()


/* Step 4
 * 
 */
grainRouter.get('/', function (req, res) {
  grainApi.getAllGrain()
    .then(grain => {
       res.render('pantry/newGrain', { allgrain: grain })
    })
})

grainRouter.get('/grain', function (req, res) {
  res.render('pantry/newGrain', {});
})

grainRouter.get('/:grainId/edit', function (req, res) {
  grainApi.getGrain(req.params.grainId)
    .then(grain => {
      res.render('grain/editGrain', { grain: grain })
    })
})

grainRouter.post('/grain', function (req, res) {
  const newGrain = req.body
  grainApi.addNewGrain(newGrain)
    .then(() => {
      res.redirect('/pantry')
    })
    .catch((error) => {
      res.send(error)
    })
})

grainRouter.put('/:grainId', function (req, res) {
  grainApi.updateGrain(req.params.grainId, req.body)
    .then(() => {
      res.redirect('/pantry');
    })
})

grainRouter.delete('/:grainId', function (req, res) {
  grainApi.deleteGrain(req.params.grainId)
    .then(() => {
      res.send('grain deleted');
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

