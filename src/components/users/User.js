import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  }

  render() {
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
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />

    return (
      <div className="container py-4">
        <div className="mb-4">
          <Link to="/" className="btn btn-secondary btn-sm"><i className="fa fa-angle-double-left" /> Back to search</Link>
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
}

export default User;
