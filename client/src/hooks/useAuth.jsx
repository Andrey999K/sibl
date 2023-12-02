import axios from "axios";
import config from "../config";

export const httpAuth = axios.create({
  baseURL: `${config.apiEndPoint}/auth/`,
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY
  }
});
