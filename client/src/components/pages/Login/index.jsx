import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "../../common/TextField";
import logIn from "../../../utils/logIn";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/user.slicer";
import MainLayout from "../../../layouts/MainLayout";
import useForm from "../../../hooks/useForm";

const Login = () => {
  const { form, handleChange } = useForm({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    logIn(form).then(res => {
      if (res.userId) {
        dispatch(setUser());
        history.push("/");
      }
    });
  };
  useEffect(() => {
    document.title = "Sibl | Вход";
  }, []);
  return (
    <MainLayout>
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
          <button className="rounded flex justify-center items-center text-white bg-my-green-200 p-2 w-full hover:bg-my-green-300">
            Войти
          </button>
          <Link to="registration" className="rounded flex justify-center items-center text-white bg-black p-2 w-full">
            Регистрация
          </Link>
        </form>
      </div>
    </MainLayout>
  );
};

export default Login;
