import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS
} from '../types';

const GitHubReducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state, // state is immutable, it can't be reassigned, so it must be copied first using the spread operator which will copy whatever is in the current state or in short, "spread the current state"
				loading: action.payload // Now the copied state can be mutated
			};
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload
			};
		case CLEAR_USERS:
			return {
				...state,
				users: []
			};
		case GET_USER:
			return {
				...state,
				user: action.payload
			};
		case GET_REPOS:
			return {
				...state,
				repos: action.payload
			};
		default:
			return state;
	}
}

export default GitHubReducer;
