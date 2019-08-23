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
const proteinApi = require('../models/protein.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from issueRouter to something that makes sense. (e.g:
 * `issueRouter`)
 */
const proteinRouter = express.Router()


/* Step 4
 * 
 */
proteinRouter.get('/', function (req, res) {
  proteinApi.getAllProtein()
    .then(protein => {
      // console.log(issues)
      res.render('protein/protein', { allprotein: protein })
    })
})

proteinRouter.get('/new', function (req, res) {
  res.render('protein/newProtein', {});
})

proteinRouter.get('/:proteinId/edit', function (req, res) {
  proteinApi.getProtein(req.params.proteinId)
    .then(protein => {
      // console.log(issues)
      res.render('protein/editProtein', { protein: protein })
    })
})

proteinRouter.post('/', function (req, res) {
  const newProtein = req.body
  proteinApi.addNewProtein(newProtein)
    .then(() => {
      res.redirect('/protein')
    })
    .catch((error) => {
      res.send(error)
    })
})

// issueRouter.put('/', function(req,res){
proteinRouter.put('/:proteinId', function (req, res) {
  proteinApi.updateProtein(req.params.proteinId, req.body)
    .then(() => {
      // res.send('updated');
      res.redirect('/protein');
    })
})

proteinRouter.delete('/:proteinId', function (req, res) {
  proteinApi.deleteProtein(req.params.proteinId)
    .then(() => {
      // res.send('green deleted');
      res.redirect('/protein');
    })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  proteinRouter
}

