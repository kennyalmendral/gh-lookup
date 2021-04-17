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

  const getUser = async username => {
    setLoading(true);

    try {
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

			dispatch({
				type: GET_USER,
				payload: res.data
			});
    } catch (e) {
      console.log(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  const getUserRepos = async username => {
    setLoading(true);

    try {
      const res = await axios.get(`https://api.github.com/users/${username}/repos?sort=created:desc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      dispatch({
				type: GET_REPOS,
				payload: res.data
			});
    } catch (e) {
      console.log(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  const clearUsers = (e) => {
    e.preventDefault();

		dispatch({ type: CLEAR_USERS });
		// dispatch({ type: CLEAR_USER });
		// dispatch({ type: CLEAR_REPOS });

    setLoading(false);
  }

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
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos
			}}
		>
			{props.children}
		</GitHubContext.Provider>
	);
}

export default GitHubState;
