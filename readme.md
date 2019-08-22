# mongoose-queries-exercise

## Objectives

* Set up a connection to a mongo DB
* Practice using mongoose query methods

## Setup

1. download the [express-intro-exercise] solution directory.
1. rename the directory to `mongoose-queries-exercise`
1. cd into that directory.
1. `npm install`
1. `npm install mongoose` to install mongoose and add it to dependencies in `package.json`
1. cd into the `models` directory
1. touch `connection.js`

## Connecting to your database
Follow the [template connection.js file] for connecting to your database.

Name your database `coffee-issue` so your connection string will be "mongodb://localhost/coffee-issue"


## Define issueSchema and compile your model
Follow the [template model file] for defining a Schema and compiling your model.

The issueSchema should have the following keys and data types:
| key           | data type     |
| :------------ | :------------ |
| name          | String        |
| employees     | Number        |
| currentlyOpen | Boolean       |

Now compile your model (use `mongoose.model()` method) and assign it to a variable called `issueCollection`

## Querying the database

For this section, refer to the [mongoose queries documentation] to research the appropriate query to use.  Be sure to use a `return` statement to return the results of the mongoose query.

First, in `models/issue.js`, delete the `global.issues` variable as we will now be interacting with our mongo database.

Next, we will refactor our model functions to query our database and return the results of those queries.

### Get All issues
Let's walk through the first query together.  We will refactor the `getissues()` function to retrieve all documents from the issue collection in the database.  Refer to mongoose's documentation on [Model.find()]. If no conditions are passed to `.find()`, then all documents are retrieved which is what we want in this case.

* In the function body for `getissues()`, replace `return global.issues` with `return issueCollection.find()`

So the `getissues()` function will go from the following:

```javascript
function getissues() {
    return global.issues;
}
```

to this:

```javascript
function getissues() {
    return issueCollection.find();
}
```

### Get Single issue
* `getissue(i)`: replace `return global.issues[i]` with the appropriate mongoose query method.
* Also, change the parameter from `i` to something that makes more sense now that we are dealing with ids instead of indexes (e.g. `id` or `issueId`).

### Add a issue
* `addissue(newissue)`: replace `global.issues.push(newissue)` with the appropriate mongoose query method.

### Update a issue
* `updateissue(i, issue)`: replace `global.issues[i] = issue` with the appropriate mongoose query method.
* Also, change the parameter from `i` to something that makes more sense now that we are dealing with ids instead of indexes (e.g. `id` or `issueId`).

### Delete a issue
* `deleteissue(i)` replace `global.issues.splice(i, 1)` with the appropriate mongoose query method.
* Also, change the parameter from `i` to something that makes more sense now that we are dealing with ids instead of indexes (e.g. `id` or `issueId`).

## Consuming the mongoose query response

Now that we are using a database instead of storing our data in a global variable, we have to wait for the asynchronous calls to the database to complete before we can return the data.

In the `controllers/issue.js` file, refactor the route handlers to chain `.then()` onto the returned mongoose query.

For example, for the following route handler:

```javascript
issueRouter.get('/', function(req,res) {
    res.send(issuesApi.getissues());
})
```

we would refactor to:

```javascript
issueRouter.get('/', function(req,res) {
    issuesApi.getissues()
        .then(issues => {
            res.send(issues)
        })
})
```

Refactor the route handlers for the following routes:
* `issueRouter.get('/', ...)`
* `issueRouter.get('/:index', ...)`
    * Also change the request parameter from `:index` to `:issueId`
* `issueRouter.post('/', ...)`
* `issueRouter.put('/:index', ...)`
    * Also change the request parameter from `:index` to `:issueId`
* `issueRouter.delete('/:index', ...)`
    * Also change the request parameter from `:index` to `:issueId`

## Testing your changes
You can test your changes for each route by using Postman


[express-intro-exercise]: ../express-intro-exercise
[mongoose queries documentation]: https://mongoosejs.com/docs/queries.html
[template connection.js file]: ../mehn-template-project/models/connection.js
[template model file]: ../mehn-template-project/models/template.js
[Model.find()]: https://mongoosejs.com/docs/api.html#model_Model.find