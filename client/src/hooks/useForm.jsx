import { useState } from "react";
import notification from "../utils/notification";

const useForm = onSubmit => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false
  });
  const config = {
    email: { isRequired: true },
    password: {
      isRequired: true,
      minLength: {
        value: 8,
        message: "Минимальная длина пароля 8 символов!"
      }
    }
  };
  const handleChange = ({ name, value }) => {
    setErrors({
      email: false,
      password: false
    });
    setForm(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (config.email.isRequired && !form.email) {
      notification("error", "Заполните Email!");
      setErrors(prevState => ({ ...prevState, email: true }));
      return;
    }
    if (config.password.isRequired && !form.password) {
      notification("error", "Заполните пароль!");
      setErrors(prevState => ({ ...prevState, password: true }));
      return;
    }
    if (config.password.minLength && form.password.length < config.password.minLength.value) {
      notification("error", config.password.minLength.message);
      setErrors(prevState => ({ ...prevState, password: true }));
      return;
    }
    onSubmit();
  };
  return { form, handleChange, errors, setErrors, handleSubmit };
};

export default useForm;
