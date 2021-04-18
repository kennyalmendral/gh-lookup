import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos'
import GitHubContext from '../../context/github/GitHubContext';

const User = ({ match }) => {
	const gitHubContext = useContext(GitHubContext);
	const { loading, user, repos, getUser, getUserRepos } = gitHubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const { name, avatar_url, location, bio, blog, company, login, html_url, followers, following, public_repos, public_gists } = user;

  if (loading) return <Spinner />

  return (
    <div id="user" className="container py-4">
      <div className="mb-4">
        <Link to="/" className="btn btn-secondary btn-sm"><i className="fa fa-angle-double-left" /> Back to home</Link>
      </div>

      <div className="row">
        <div className="col-12 mb-4 col-lg-3 mb-lg-0">
          <div className="card shadow-sm">
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

        <div className="col-12 col-lg-9">
          <div className="card shadow-sm">
            <div className="card-header">
              <h3 className="card-title">{name} ({login})</h3>
            </div>

            <div className="card-body">
              {bio ? <p>{bio}</p> : <p>No bio specified.</p>}
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

          <div className="card shadow-sm mt-4">
            <div className="card-header">
              <h3>Repositories</h3>
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

export default User;
