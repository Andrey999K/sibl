import axios from "axios";
import localStorageServices from "./localStorage.service";
import config from "../config.js";

const httpAuth = axios.create({
  baseURL: config.apiEndPoint + "/auth/",
  params: {
    key: process.env.REACT_APP_FI
  }
});

const authService = {
  register: async({ email, password }) => {
    const { data } = await httpAuth.post(`signUp`, {
      email,
      password,
      returnSecureToken: true
    });
    return data;
  },
  login: async({ email, password }) => {
    const { data } = await httpAuth.post(`signInWithPassword`, {
      email,
      password,
      returnSecureToken: true
    });
    return data;
  },
  refresh: async() => {
    const { data } = await httpAuth.post("token", {
      grant_type: "refresh_token",
      refresh_token: localStorageServices.getRefreshToken()
    });
    return data;
  }
};

export default authService;
