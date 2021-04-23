import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card shadow-sm">
        <img src={avatar_url} alt={login} className="card-img-top" />

        <div className="card-body">
          <h3 className="card-text">{login}</h3>
        </div>

        <div className="card-footer bg-light">
            <Link to={`/user/${login}`} className="btn btn-success btn-block my-2">View Profile</Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;