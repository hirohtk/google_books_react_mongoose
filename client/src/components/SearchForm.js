import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="input-field col s6">
        <input id="search" type="text" className="validate" name="searchTerm"
          onChange={props.handleInputChange}
          value={props.value}
        />
        <label for="search">Book</label>
        <button className ="btn waves-effect waves-light" type="submit" name="action"
        onClick={props.handleFormSubmit}
        >Submit
        <i className="material-icons right">send</i>
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
