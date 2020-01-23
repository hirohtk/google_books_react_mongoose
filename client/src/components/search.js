import React from 'react';
import SearchForm from './SearchForm';
import './search.css'

class Search extends React.Component {

    state = {
        searchTerm: ""
    }

    search = (query) => {
        console.log(`Searching for ${query}...`)
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

    render() {
        return (
            <div className="searchBox col s12">
                <div className="row">
                    <div className="search col s12">
                        <h4>Book Search</h4>
                        <h5>Enter a book:</h5>
                        <SearchForm
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        value={this.searchTerm}>
                        </SearchForm>
                    </div>
                </div>
            </div>
        )
    }
}


export default Search;