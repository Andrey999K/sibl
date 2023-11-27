import React, { useCallback, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import axios from "axios";
import localStorageService, { setTokens } from "../services/localStorage.service";
import Loader from "../components/ui/Loader";
import notification from "../utils/notification";
import { useDispatch, useSelector } from "react-redux";
import config from "../config";
import { deleteUser, getLoadingUser, setUser, updateUser } from "../store/user.slicer";
import { useHistory } from "react-router-dom";

export const httpAuth = axios.create({
  baseURL: `${config.apiEndPoint}/auth/`,
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY
  }
});
const AuthContext = React.createContext(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const isLoading = useSelector(getLoadingUser());
  const history = useHistory();
  const checkUserData = useCallback(() => {
    dispatch(setUser());
  }, [dispatch]);
  async function logIn({ email, password }) {
    try {
      const { data } = await httpAuth.post(
        `signInWithPassword`,
        {
          email,
          password
        }
      );
      setTokens(data);
      if (data.userId) {
        dispatch(setUser());
        history.push("/");
      }
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      if (code === 400) {
        switch (message) {
          case "EMAIL_NOT_FOUND":
          case "INVALID_PASSWORD":
            notification("error", "Неправильный логин или пароль!");
            throw new Error("Email или пароль введены некорректно");
          default:
            notification("error", "Слишком много попыток входа. Попробуйте позже");
            throw new Error(
              "Слишком много попыток входа. Попробуйте позже"
            );
        }
      }
    }
  }
  function logOut() {
    localStorageService.removeAuthData();
    dispatch(deleteUser());
  }
  async function updateUserData(data) {
    try {
      dispatch(updateUser(data));
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function signUp({ email, password, ...rest }) {
    try {
      const { data } = await httpAuth.post(`signUp`, {
        email,
        password,
        returnSecureToken: true
      });
      setTokens(data);
      return data;
    } catch (error) {
      errorCatcher(error);
      const { code, message, errors } = error.response.data.error;
      if (code === 400) {
        if (message === "EMAIL_EXISTS") {
          notification("error", "Пользователь с таким Email уже существует");
          return {
            email: "Пользователь с таким Email уже существует"
          };
        } else if (message === "INVALID_DATA") {
          errors.forEach(error => notification("error", error.msg));
          return { code, message, errors };
        }
      }
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  };
  useEffect(() => {
    checkUserData();
  }, []);
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);
  return (
    <AuthContext.Provider
      value={{ signUp, logIn, logOut, updateUserData }}
    >
      {!isLoading ? children : <Loader />}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AuthProvider;
