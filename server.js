const mongoose = require("mongoose");
// const routes = require("./routes");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

// app.use(routes);

// ROUTES (for now)

app.get("/api/books", function (req, res) {

});

app.post("/api/books", function (req, res) {

});

// Connect to the Mongo DB

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist";
mongoose.connect(MONGODB_URI);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
