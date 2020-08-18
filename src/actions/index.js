import { FETCH_USERS, SHOW_LOADER, HIDE_LOADER } from "./types";

export const fetchUsers = (query) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}&per_page=100`,
      {
        method: "GET",
      }
    );
    const responseData = await response.json();
    dispatch({ type: FETCH_USERS, payload: responseData.items });
  };
};

export const showLoader = () => {
  return { type: SHOW_LOADER };
};

export const hideLoader = () => {
  return { type: HIDE_LOADER };
};
