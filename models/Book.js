var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image : {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false,
    required: false
  },
  
//   note: {
//     type: Schema.Types.ObjectId, 
//     ref: "Note"
//   }
});

// This creates our model from the above schema, using mongoose's model method
//  this article is a Collection called "Books", defined by BookSchema
var Books = mongoose.model("Books", BookSchema);

module.exports = Books;