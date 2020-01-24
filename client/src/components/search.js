import React from 'react';
import SearchForm from './SearchForm';
import './search.css'

function Search(props) {

    return (
        <div className="searchBox col s12">
            <div className="row">
                <div className="search col s12">
                    <h4>Book Search</h4>
                    <h5>Enter a book:</h5>
                    <SearchForm
                    handleInputChange={props.handleInputChange}
                    handleFormSubmit={props.handleFormSubmit}
                    value={props.searchTerm}>
                    </SearchForm>
                </div>
            </div>
        </div>
    )

}


export default Search;