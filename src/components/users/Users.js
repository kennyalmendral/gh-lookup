import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GitHubContext from '../../context/github/GitHubContext';

const Users = () => {
	const gitHubContext = useContext(GitHubContext);
	const { users, loading } = gitHubContext;

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="container my-5">
        <div className="row">
          {users.map(user =>
            <UserItem
							key={user.id}
							user={user}
						/>
          )}
        </div>
      </div>
    );
  }
}

export default Users;
