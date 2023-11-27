import React, { useState } from "react";
import Icon from "../../common/Icon";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import TextField from "../../common/TextField";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const handleChange = ({ name, value }) => {
    setForm(prevState => ({ ...prevState, [name]: value }));
  };
  const { logIn } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(form);
  };
  return (
    <div className="w-full h-full flex justify-center mx-auto mt-8 md:mt-12">
      <form
          onSubmit={handleSubmit}
          className="max-w-[440px] w-full flex flex-col items-center gap-4 p-5 bg-white rounded"
      >
        <h2 className="text-2xl font-bold">Вход</h2>
        <TextField
          value={form.email}
          onChange={handleChange}
          name="email"
          className="text-base !px-3 !py-2 border-solid !border-my-green-200"
          placeholder="E-mail"
        />
        <TextField
          value={form.password}
          onChange={handleChange}
          name="password"
          className="text-base !px-3 !py-2 border-solid !border-my-green-200"
          placeholder="Пароль"
          type="password"
        />
        <button className="rounded flex justify-center items-center text-white bg-my-green-200 p-2 w-full hover:bg-my-green-300">Войти</button>
        <Link
          to="registration"
          className="rounded flex justify-center items-center text-white bg-black p-2 w-full"
        >Регистрация</Link>
        <span className="text-sm">Или войдите с помощью других сервисов</span>
        <div className="flex gap-5">
          <div role="button">
            <Icon name="google" className="w-[32px] h-[32px]" />
          </div>
          <div role="button">
            <Icon name="vk" className="w-[32px] h-[32px]" />
          </div>
          <div role="button">
            <Icon name="github" className="w-[32px] h-[32px]" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
