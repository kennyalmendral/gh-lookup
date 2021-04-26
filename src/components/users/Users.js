import React, { useContext, useEffect } from 'react';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GitHubContext from '../../context/github/GitHubContext';

const Users = () => {
  const gitHubContext = useContext(GitHubContext);
  const { loading, users, getUsers, clearUsers } = gitHubContext;

  useEffect(() => {
    clearUsers();
    getUsers();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div id="users" className="container my-5">
        <div className="row">
          {users.map(user =>
            <UserItem key={user.id} user={user} />
          )}
        </div>
      </div>
    );
  }
}

export default Users;