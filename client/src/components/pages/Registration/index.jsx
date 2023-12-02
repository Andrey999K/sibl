import React from "react";
import { Link, useHistory } from "react-router-dom";
import signUp from "../../../utils/signUp";
import TextField from "../../common/TextField";
import useForm from "../../../hooks/useForm";
import MainLayout from "../../../layouts/MainLayout";

const Registration = () => {
  const { form, handleChange, errors, handleSubmit: onSubmit } = useForm(handleSubmit);
  const history = useHistory();
  function handleSubmit() {
    signUp(form).then(res => {
      if (res.userId) history.push("login");
    });
  }
  return (
    <MainLayout>
      <div className="w-full h-full flex justify-center mx-auto mt-8 md:mt-12">
        <form
          onSubmit={onSubmit}
          className="max-w-[440px] w-full flex flex-col items-center gap-4 p-5 bg-white rounded"
        >
          <h2 className="text-2xl font-bold">Регистрация</h2>
          <TextField
            value={form.email}
            onChange={handleChange}
            className="w-full rounded text-base px-3 py-2 border-solid border-[1px] border-my-green-200"
            placeholder="E-mail"
            type="text"
            name="email"
            error={errors.email}
          />
          <TextField
            value={form.password}
            onChange={handleChange}
            className="w-full rounded text-base px-3 py-2 border-solid border-[1px] border-my-green-200"
            placeholder="Пароль"
            type="password"
            name="password"
            error={errors.password}
          />
          <button className="rounded flex justify-center items-center text-white bg-my-green-200 p-2 w-full hover:bg-my-green-300">
            Зарегистрироваться
          </button>
          <Link to="login" className="rounded flex justify-center items-center text-white bg-black p-2 w-full">
            Вход
          </Link>
        </form>
      </div>
    </MainLayout>
  );
};

export default Registration;
