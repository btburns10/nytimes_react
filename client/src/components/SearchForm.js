import React from "react";

const SearchForm = props => (
  <form>
    <div>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search Articles"
        id="search"
      />
      <button
        className="btn #bbdefb blue lighten-2"
        onClick={props.handleFormSubmit}
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;