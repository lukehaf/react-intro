import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
  }

  onInputChange = (event) => {
    this.props.onSearchChange(event.target.value);
    this.setState({ searchterm: event.target.value });
    console.log(event.target.value);
  } // arrow functions don't have their own state,
  // so 'this' refers to the parent, the searchbar. Perfect!

  render() {
    return (
      <div id="search-bar">
        <input onChange={this.onInputChange} value={this.state.searchterm} />
      </div>
    );
  }
}

export default SearchBar;
