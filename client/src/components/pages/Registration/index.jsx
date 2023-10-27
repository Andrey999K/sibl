import React, { useState } from "react";
import Icon from "../../common/Icon";
import { useAuth } from "../../../hooks/useAuth";

const Registration = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const { signUp } = useAuth();
  const handleChange = (e) => {
    setForm(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    signUp(form)
      .then(res => console.log(res))
      .catch(error => console.error(error));
    // httpService.post(`${config.apiEndPoint}/auth/signUp`, form)
    //   .then(res => console.log(res))
    //   .catch(error => console.error(error));
  };
  return (
    <div className="w-full h-full flex justify-center mx-auto mt-8 md:mt-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-[440px] w-full flex flex-col items-center gap-4 p-5 bg-white rounded"
      >
        <h2 className="text-2xl font-bold">Регистрация</h2>
        <input
          value={form.email}
          onChange={handleChange}
          className="w-full rounded text-base px-3 py-2 border-solid border-[1px] border-my-green-200"
          placeholder="E-mail"
          type="text"
          name="email"
        />
        <input
          value={form.password}
          onChange={handleChange}
          className="w-full rounded text-base px-3 py-2 border-solid border-[1px] border-my-green-200"
          placeholder="Пароль"
          type="password"
          name="password"
        />
        <button className="rounded flex justify-center items-center text-white bg-my-green-200 p-2 w-full hover:bg-my-green-300">Зарегистрироваться</button>
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

export default Registration;
