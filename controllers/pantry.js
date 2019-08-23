/* Step 1 import express
 *
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

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from pantryRouter to something that makes sense. (e.g:
 * `pantryRouter`)
 */
const pantryRouter = express.Router()


/* Step 4
 * 
 */
pantryRouter.get('/', function (req, res) {
  pantryApi.getAllPantry()
    .then(pantry => {
        res.render('pantry/pantry', { allpantry: pantry })
  
    })
})

pantryRouter.get('/new', function (req, res) {
  res.render('pantry/newPantryForm', {});
})

pantryRouter.get('/:pantryId/edit', function (req, res) {
  pantryApi.getPantry(req.params.pantryId)
    .then(pantry => {
      // console.log(pantry)
      res.render('pantry/editPantryForm', { pantry: pantry })
    })
 
})

pantryRouter.post('/', function (req, res) {
  
  const newPantry = req.body
  pantryApi.addNewPantry(newPantry)
    .then(() => {
      res.redirect('/pantry')
    })
    .catch((error) => {
      res.send(error)
    })
})

pantryRouter.put('/:pantryId', function (req, res) {
  pantryApi.updatePantry(req.params.pantryId, req.body)
    .then(() => {
      res.redirect('/pantry');
    })
})

pantryRouter.delete('/:pantryId', function (req, res) {
  pantryApi.deletePantry(req.params.pantryId)
    .then(() => {
      res.send('pantry deleted');
      // res.redirect('/pantry');
    })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  pantryRouter
}

