const mongoose = require("mongoose");
// const routes = require("./routes");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

var http = require('http').createServer(app);
var io = require('socket.io')(http);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Connect to the Mongo DB

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist";
mongoose.connect(MONGODB_URI);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  
});

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });

// http.listen(3002, function(){
//   console.log('listening on *:3002');
// });
