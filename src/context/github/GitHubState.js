import React, { useReducer } from 'react';
import axios from 'axios';
import GitHubContext from './GitHubContext';
import GitHubReducer from './GitHubReducer';
import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS
} from '../types';

const GitHubState = props => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false
	};

	const [state, dispatch] = useReducer(GitHubReducer, initialState);

  const searchUsers = async searchTerm => {
    setLoading(true);

    try {
      const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

			dispatch({
				type: SEARCH_USERS,
				payload: res.data.items
			});
    } catch (e) {
      console.log(e.response.data.message);
    } finally {
    	setLoading(false);
    }
  }

	// Get user

	// Get repos

	// Clear users

	const setLoading = value => dispatch({
		type: SET_LOADING,
		payload: value
	});

	return (
		<GitHubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers
			}}
		>
			{props.children}
		</GitHubContext.Provider>
	);
}

export default GitHubState;
