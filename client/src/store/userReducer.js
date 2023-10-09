import localStorageService from "../services/localStorage.service";

const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      console.log("action");
      console.log(action.payload);
      return action.payload;
    case "LOG_OUT":
      localStorageService.removeAuthData();
      return null;
    default:
      return state;
  }
};
