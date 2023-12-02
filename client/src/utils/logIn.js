import { setTokens } from "../services/localStorage.service";
import notification from "./notification";
import { httpAuth } from "../hooks/useAuth";

async function logIn({ email, password }) {
  try {
    const { data } = await httpAuth.post(`signInWithPassword`, {
      email,
      password
    });
    setTokens(data);
    return data;
  } catch (error) {
    // errorCatcher(error);
    console.log(error);
    const { code, message } = error.response.data.error;
    if (code === 400) {
      switch (message) {
        case "EMAIL_NOT_FOUND":
        case "INVALID_PASSWORD":
          notification("error", "Неправильный логин или пароль!");
          throw new Error("Неправильный логин или пароль!");
        case "INVALID_DATA":
          notification("error", "Email или пароль введены некорректно!");
          throw new Error("Email или пароль введены некорректно!");
        default:
          notification("error", "Непредвиденная ошибка сервера, попробуйте позже.");
          throw new Error("Непредвиденная ошибка сервера, попробуйте позже.");
      }
    }
    return { code, message };
  }
}

export default logIn;
