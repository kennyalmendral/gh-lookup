import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, CLEAR_USER, CLEAR_REPOS, GET_USERS, GET_USER, GET_REPOS } from '../types';

const GitHubReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
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
    case CLEAR_USER:
      return {
        ...state,
        user: {}
      };
    case CLEAR_REPOS:
      return {
        ...state,
        repos: []
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload
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