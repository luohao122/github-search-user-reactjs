import {
  FETCH_USERS,
  SHOW_LOADER,
  HIDE_LOADER,
  REMOVE_USERS,
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case REMOVE_USERS:
      return { ...state, users: [] };
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
