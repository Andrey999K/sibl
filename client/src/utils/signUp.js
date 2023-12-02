import { setTokens } from "../services/localStorage.service";
import notification from "./notification";
import { httpAuth } from "../hooks/useAuth";

async function signUp({ email, password }) {
  try {
    const { data } = await httpAuth.post(`signUp`, {
      email,
      password,
      returnSecureToken: true
    });
    console.log({ data });
    setTokens(data);
    return data;
  } catch (error) {
    console.log(error);
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

export default signUp;
