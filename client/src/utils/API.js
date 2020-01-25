import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// I don't need an API key for this...

//const APIKEY = "&key=AIzaSyAoLsFlENrSVRwT-f6IuK2K1pmlmToX7z8";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
