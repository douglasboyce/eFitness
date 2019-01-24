const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Require all models
var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

db.BPList.create({ systolic: 120, diastolic: 78, pulserate: 80, weight: 132 })
  .then(function(dbBPList) {
    console.log(dbBPist);
  })
  .catch(function(err) {
    console.log(err.message);
  });


// Route for getting all BPLists from the db
app.get("/bplogchart/all", function(req, res) {
  // Grab every document in the BPList collection
  console.log("I have arrived");
  db.BPList.find({})
    .then(function(dbBPList) {
      // If we were able to successfully find BP Info, send them back to the client
      res.json(dbBPList);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for saving/updating an Article's associated Note
app.post("/bplogchart/:id", function(req, res) {
  // Create a new note and pass the req.body to the entry
  db.BPList.create(req.body)
    .then(function(dbBPList) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.BPList.findOneAndUpdate({ _id: req.params.id }, { BPList: dbBPList._id }, { new: true });
    })
    .then(function(dbBPList) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbBPList);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
