// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();
// var db = require("../models");

// var router = express.Router();

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.get("/api/books", function (req, res) {
//   res.json({test: "test GET"})
//   console.log("test")
// });

// app.post("/api/books", function (req, res) {
//   console.log(req.body);
//   console.log('test');
//   // db.Book.create({req}).then((response) => {
//   // })
// });

// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
