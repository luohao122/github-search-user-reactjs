import { FETCH_USERS, REMOVE_USERS, SHOW_LOADER, HIDE_LOADER } from "./types";

export const fetchUsers = (query) => {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}&per_page=100`,
      {
        method: "GET",
      }
    );
    const responseData = await response.json();
    dispatch({ type: HIDE_LOADER });
    dispatch({ type: FETCH_USERS, payload: responseData.items });
  };
};

export const removeUsers = () => {
  return { type: REMOVE_USERS };
};
