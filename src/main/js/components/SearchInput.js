import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  static propTypes = {
    queryUpdate: PropTypes.func.isRequired
  };

  state = {
    query: ''
  };

  /**
   * Updates component's state and
   * forwards search to filter function
   *
   * @param {string} query - query string
   */
  updateQuery = query => {
    this.setState({ query });
    this.props.queryUpdate(query.trim().toLowerCase());
  };

  render() {
    return (
      <input
        type="search"
        name="query"
        value={this.state.query}
        className="search-input"
        placeholder="Search places"
        onChange={event => {
          this.updateQuery(event.target.value);
        }}
      />
    );
  }
}

export default SearchInput;
