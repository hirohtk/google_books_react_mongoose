const path = require("path");
const router = require("express").Router();
const db = require("../models/index");



router.get("/api/books", function (req, res) {
    console.log("api GET request received");
    db.Book.find({saved: true}).then( (response) => {
        res.json(response);
    })
    .catch(err => res.status(422).json(err));
})

router.post("/api/books", function (req, res) {
    console.log(`Added Book ${req.body.title} to database.`);
    db.Book.create(req.body)
    .then(res.json())
    .catch(err => res.status(422).json(err));
})

router.delete("/api/books/:id", function (req, res) {
    let id = req.params.id;
    console.log(`Deleting book ${id} from database.`);
    db.Book.findByIdAndDelete(id)
    .then(res.json(response))
    .catch(err => res.status(422).json(err));
})

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

// Making this route for Heroku as opposed to the above - should equivalent to the above
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

module.exports = router;
