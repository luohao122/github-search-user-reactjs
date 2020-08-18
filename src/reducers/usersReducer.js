import { FETCH_USERS } from "../actions/types";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
