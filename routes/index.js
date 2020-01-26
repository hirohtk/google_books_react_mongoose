const path = require("path");
const router = require("express").Router();

router.get("/api/books", function (req, res) {
    
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
    console.log("test1");
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
