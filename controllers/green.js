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
  pantryApi.getAllpantry()
    .then(pantry => {
      // console.log(pantry)
      res.render('pantry/pantry', { allpantry: pantry })
    })
})

pantryRouter.get('/new', function (req, res) {
  res.render('pantry/newpantryForm', {});
})

pantryRouter.get('/:pantryId/edit', function (req, res) {
  pantryApi.getpantry(req.params.pantryId)
    .then(pantry => {
      // console.log(pantry)
      res.render('pantry/editpantryForm', { pantry: pantry })
    })
  // const pantryId = req.params.pantryId
  // console.log(pantryId)
  // pantryApi.findById(pantryId)
  // .then((pantry)=>{
  //   res.render("pantry/edit", {
  //     pantry: pantry
  //   })
  // })
})

pantryRouter.post('/', function (req, res) {
  // console.log('req.body', req.body)
  // pantryApi.addNewpantry(req.body)
  //   .then(() => {
  //   res.redirect('/pantry')
  //   // res.send('pantry created');
  //   })
  const newpantry = req.body

  pantryApi.addNewpantry(newpantry)
    .then(() => {
      res.redirect('/pantry')
    })
    .catch((error) => {
      res.send(error)
    })
})

// pantryRouter.put('/', function(req,res){
pantryRouter.put('/:pantryId', function (req, res) {
  pantryApi.updatepantry(req.params.pantryId, req.body)
    .then(() => {
      // res.send('updated');
      res.redirect('/pantry');
    })
})

pantryRouter.delete('/:pantryId', function (req, res) {
  pantryApi.deletepantry(req.params.pantryId)
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

