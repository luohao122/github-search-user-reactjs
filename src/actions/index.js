import { FETCH_USERS } from "./types";

export const fetchUsers = (query) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}&per_page=100`,
      {
        method: "GET",
      }
    );
    const responseData = response.json();
    dispatch({ type: FETCH_USERS, payload: responseData });
  };
};
