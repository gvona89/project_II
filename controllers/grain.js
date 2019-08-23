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
const grainApi = require('../models/grain.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from pantryRouter to something that makes sense. (e.g:
 * `pantryRouter`)
 */
const grainRouter = express.Router()


/* Step 4
 * 
 */
grainRouter.get('/', function (req, res) {
  grainApi.getAllGrain()
    .then(grain => {
      // console.log(pantry)
       res.render('pantry/newGrain', { allgrain: grain })
    })
})

grainRouter.get('/new', function (req, res) {
  res.render('pantry/grain', {});
})

grainRouter.get('/:grainId/edit', function (req, res) {
  grainApi.getGrain(req.params.grainId)
    .then(grain => {
      // console.log(grain)
      res.render('grain/editGrain', { grain: grain })
    })
})

grainRouter.post('/grain', function (req, res) {
  const newGrain = req.body
  grainApi.addNewGrain(newGrain)
    .then(() => {
      // res.render('pantry/grain', {grain : grain});
      res.redirect('/grain')
      // res.send(grainApi.getAllGrain())
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
      // res.redirect('/pantry');
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

