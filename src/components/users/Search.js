import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    search_term: '',
    is_searching: false
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    this.setState({ is_searching: true });

    this.props.searchUsers(this.state.search_term).finally(() => {
      this.setState({
        search_term: '',
        is_searching: false
      });
    });
  }

  render() {
    const { clearUsers, showClearBtn } = this.props;
    const { search_term, is_searching } = this.state;

    return (
      <div className="py-5 bg-light shadow-sm">
        <div className="container">
          <form onSubmit={this.onSubmit} className="row">
            <div className="col-12 col-md-8">
              <input type="text" className="form-control form-control-lg" name="search_term" placeholder="Enter search term" value={search_term} onChange={this.onChange} />
            </div>

            <div className="col-12 col-md-4 mt-4 mt-md-0">
              <div className="d-flex align-items-center">
                {showClearBtn && (
                  <Fragment>
                    <button className="btn btn-lg btn-success btn-block" style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }} disabled={is_searching}>
                      {is_searching && <i className="fa fa-circle-o-notch fa-spin fa-fw d-inline-block mr-2"></i>}
                      <span>{is_searching ? 'Searching' : 'Search'}</span>
                    </button>

                    <a href="#" className="m-0 btn btn-lg btn-secondary btn-block" onClick={clearUsers} style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}>Clear</a>
                  </Fragment>
                )}

                {!showClearBtn && (
                  <button className="btn btn-lg btn-success btn-block" style={{ borderTopRightRadius: '.3rem', borderBottomRightRadius: '.3rem' }} disabled={is_searching}>
                    {is_searching && <i className="fa fa-circle-o-notch fa-spin fa-fw d-inline-block mr-2"></i>}
                    <span>{is_searching ? 'Searching' : 'Search'}</span>
                  </button>
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
