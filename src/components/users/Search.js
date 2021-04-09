import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    search_term: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    this.props.searchUsers(this.state.search_term);

    this.setState({ search_term: '' });
  }

  render() {
    const { clearUsers, showClearBtn } = this.props;

    return (
      <div className="py-5 bg-light shadow-sm">
        <div className="container">
          <form onSubmit={this.onSubmit} className="row">
            <div className="col-12 col-md-9">
              <input type="text" className="form-control form-control-lg" name="search_term" placeholder="Enter search term" value={this.state.search_term} onChange={this.onChange} />
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0">
              <div className="d-flex align-items-center">
                {showClearBtn && (
                  <Fragment>
                    <input type="submit" className="btn btn-lg btn-success btn-block" value="Search" style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }} />

                    <a href="#" className="m-0 btn btn-lg btn-secondary btn-block" onClick={clearUsers} style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}>Clear</a>
                  </Fragment>
                )}

                {!showClearBtn && (
                  <input type="submit" className="btn btn-lg btn-success btn-block" value="Search" style={{ borderTopRightRadius: '.3rem', borderBottomRightRadius: '.3rem' }} />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
