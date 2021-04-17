import React, { Fragment, useState, useContext } from 'react';
import GitHubContext from '../../context/github/GitHubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
	const gitHubContext = useContext(GitHubContext);
	const { users, clearUsers } = gitHubContext;

	const alertContext = useContext(AlertContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const onChange = e => setSearchTerm(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    setIsSearching(true);

    if (searchTerm === '') {
      alertContext.setAlert('Please enter a search term', 'danger');

      setSearchTerm('');
      setIsSearching(false);
    } else {
      gitHubContext.searchUsers(searchTerm).finally(() => {
        setSearchTerm('');
        setIsSearching(false);
      });
    }
  }

  return (
    <div className="py-5 bg-light shadow-sm">
      <div className="container">
        <form onSubmit={onSubmit} className="row">
          <div className="col-12 col-md-8">
            <input type="text" className="form-control form-control-lg" placeholder="Enter search term" value={searchTerm} onChange={onChange} />
          </div>

          <div className="col-12 col-md-4 mt-4 mt-md-0">
            <div className="d-flex align-items-center">
              {users.length > 0 && (
                <Fragment>
                  <button className="btn btn-lg btn-success btn-block" style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }} disabled={isSearching}>
                    {isSearching && <i className="fa fa-circle-o-notch fa-spin fa-fw d-inline-block mr-2"></i>}
                    <span>{isSearching ? 'Searching' : 'Search'}</span>
                  </button>

                  <a href="#" className="m-0 btn btn-lg btn-secondary btn-block" onClick={clearUsers} style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}>Clear</a>
                </Fragment>
              )}

              {users.length === 0 && (
                <button className="btn btn-lg btn-success btn-block" style={{ borderTopRightRadius: '.3rem', borderBottomRightRadius: '.3rem' }} disabled={isSearching}>
                  {isSearching && <i className="fa fa-circle-o-notch fa-spin fa-fw d-inline-block mr-2"></i>}
                  <span>{isSearching ? 'Searching' : 'Search'}</span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
