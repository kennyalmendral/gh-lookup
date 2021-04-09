import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="col-12 col-md-3 mb-4">
      <div className="card shadow-sm">
        <img src={avatar_url} alt={login} className="card-img-top" />

        <div className="card-body">
          <h3 className="card-text">{login}</h3>
        </div>

        <div className="card-footer bg-light">
            <a href={html_url} className="btn btn-success btn-block my-2" target="_blank" rel="noreferrer">Visit Profile</a>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
