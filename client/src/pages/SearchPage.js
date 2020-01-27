import React from 'react';
import Nav from "../components/nav";
import Search from "../components/search";
import ResultBox from "../components/ResultsBox";
import NoBookBox from "../components/noBooks";
import GoogleBooksAPI from "../utils/GoogleBooksAPI";
import axios from "axios";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './Page.css';

class SearchPage extends React.Component {

  state = {
    searchTerm: "",
    results: []
  }

  search = (query) => {
    console.log(`Searching for ${query}...`)
    GoogleBooksAPI.search(query).then((response) => {
      // Setting up a more manageable array in state:
      let cleanResultArray = [];
      for (let i = 0; i < 10; i++) {
        let responseObj = {};
        responseObj.title = response.data.items[i].volumeInfo.title;
        if (!response.data.items[i].volumeInfo.authors) {
          responseObj.authors = "No Authors"
        }
        else {
          responseObj.authors = response.data.items[i].volumeInfo.authors.join(", ");
        }
        responseObj.description = response.data.items[i].volumeInfo.description;
        if (!response.data.items[i].volumeInfo.imageLinks) {
          responseObj.image = "No Thumbnail available"
        }
        else {
          responseObj.image = response.data.items[i].volumeInfo.imageLinks.thumbnail;
        }
        responseObj.link = response.data.items[i].volumeInfo.infoLink;

        // function HandleNoData() {
        //   let thingsINeed = [response.data.items[i].volumeInfo.title, response.data.items[i].volumeInfo.authors,
        //   response.data.items[i].volumeInfo.description, response.data.items[i].volumeInfo.imageLinks.thumbnail,
        //   response.data.items[i].volumeInfo.infoLink]

        //   if (thingsINeed.includes(undefined)) {
        //     let position = thingsINeed.indexOf(undefined);
        //   }

        //   responseObj.description = response.data.items[i].volumeInfo.description;
        //   responseObj.image = response.data.items[i].volumeInfo.imageLinks.thumbnail;
        //   responseObj.link = response.data.items[i].volumeInfo.infoLink;
        // }

        responseObj.id = i;
        cleanResultArray.push(responseObj);
      }
      this.setState({ results: cleanResultArray }, () => console.log(this.state.results));
      // ... why doesn't this work?  I've done the above instead, but would like to use a callback instead, ideally.
      // this.setState({results: cleanResultArray}).then( (what) => console.log(this.state.results))
    })

  }
  // the onChange JS handler that's in the form triggers this method below, which changes state every time a key is pressed
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(`name is ${name}`)
    console.log(`value is ${value}`)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.search(this.state.searchTerm);
  };

  // made id a number that represents the index in the result array in state.  passed id using props
  save = (id) => {
    let objToDB = {
      title: this.state.results[id].title,
      authors: this.state.results[id].authors,
      description: this.state.results[id].description,
      image: this.state.results[id].image,
      link: this.state.results[id].link,
      saved: true
    }
    console.log(objToDB);
    axios.post("/api/books", objToDB)
      .then((response) => {
        console.log(response);
        console.log((this.state.results))
        // for the array in results, return an array that is just each object's id key and value
        // then find the index where the value equals this id being saved
        var elementPos = this.state.results.map(function (x) { return x.id; }).indexOf(id);
        console.log(elementPos);
        // now, re-setting state without this element (splice modifies the original array)
        this.state.results.splice(elementPos, 1);
        this.setState({ results: this.state.results });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <div className="staticJumbotron col s12">
              <h3>React Google Books Search</h3>
              <h4>Search for and Save Books of interest!</h4>
            </div>
            <Search
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              value={this.searchTerm}
            >
            </Search>
          </div>
          <div className="row">
            <div className="results">
              <h3>Results</h3>
              <div>
                {
                  (this.state.results.length === 0) ?
                    <NoBookBox
                      type={"Search for"}>>
                  </NoBookBox>
                    :
                    this.state.results.map((each) => (
                      <ResultBox
                        title={each.title}
                        authors={each.authors}
                        description={each.description}
                        image={each.image}
                        link={each.link}
                        save={this.save}
                        id={each.id}
                        type={"save"}>
                      </ResultBox>
                    )
                    )
                }
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
