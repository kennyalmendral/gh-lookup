import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom';
import GitHubContext from '../../context/github/GitHubContext';

const User = ({ repos, getUserRepos, match }) => {
	const gitHubContext = useContext(GitHubContext);
	const { loading, user, getUser } = gitHubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []); // In order to mimick the behavior of componentDidMount, pass a empty array [] as the second argument

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />

  return (
    <div className="container py-4">
      <div className="mb-4">
        <Link to="/" className="btn btn-secondary btn-sm"><i className="fa fa-angle-double-left" /> Back to home</Link>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="card">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <img src={avatar_url} alt={name} width="80%" className="rounded-circle img-fluid my-4" />

              {location && (
                <div>
                  <div><strong>Location:</strong> {location}</div>
                </div>
              )}
            </div>

            <div className="card-footer p-3">
              <a href={html_url} className="btn btn-block btn-success" target="_blank" rel="noreferrer"><i className="fa fa-github" /> Visit GitHub Profile</a>
            </div>
          </div>
        </div>

        <div className="col-9">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title">{name} ({login})</h1>
            </div>

            <div className="card-body">
              {hireable ? <p className="text-success fw-bold">Available for hire</p> : <p className="text-danger fw-bold">Not available for hire</p>}

              {bio && <p>{bio}</p>}
              {company && <p>Works at {company}</p>}
              {blog && <p><a href={blog} target="_blank" rel="noreferrer">{blog}</a></p>}
            </div>

            <div className="card-footer py-3">
              <div className="badge bg-primary mr-2">{followers} followers</div>
              <div className="badge bg-info mr-2">{following} following</div>
              <div className="badge bg-danger mr-2">{public_repos} public repositories</div>
              <div className="badge bg-warning mr-2">{public_gists} public gists</div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h2>Repositories</h2>
            </div>

            <div className="card-body">
              <Repos repos={repos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired
}

export default User;
