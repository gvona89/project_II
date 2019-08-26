
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
// const pantryApi = require('../models/pantry.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from issueRouter to something that makes sense. (e.g:
 * `issueRouter`)
 */
const pantryRouter = express.Router()


/* Step 4
 * 
 */
pantryRouter.get('/', (req, res) => {
    res.render('pantry/home')
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
    pantryRouter
  }
  