import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    search_term: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    this.props.searchUsers(this.state.search_term);

    this.setState({ search_term: '' });
  }

  render() {
    return (
      <div className="py-5 bg-light shadow-sm">
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="input-group">
              <input type="text" className="form-control form-control-lg" name="search_term" placeholder="Enter search term" value={this.state.search_term} onChange={this.onChange} />

              <input type="submit" className="btn btn-lg btn-success px-5" style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }} value="Search" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
