import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return(
      <div className="col-12 col-md-3">
        <div className="card shadow-sm">
          <img src={avatar_url} alt={login} className="card-img-top" />

          <div className="card-body">
            <h3 className="card-text">{login}</h3>
            <div>
              <a href={html_url} className="btn btn-success my-2" target="_blank" rel="noreferrer">View Pofile</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserItem;
