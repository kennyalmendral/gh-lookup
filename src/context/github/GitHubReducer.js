import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state, // state is immutable, it can't be reassigned, so it must be copied first using the spread operator which will copy whatever is in the current state
				loading: action.payload // Now the copied state can be mutated
			};
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload
			};
		default:
			return state;
	}
}
