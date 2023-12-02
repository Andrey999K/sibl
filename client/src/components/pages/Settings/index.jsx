import React, { useState } from "react";
import TextField from "../../common/TextField";
import Button from "../../common/Button";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/user.slicer";
import PageTitle from "../../common/PageTitle";
import MainLayout from "../../../layouts/MainLayout";

const Settings = () => {
  const [form, setForm] = useState({
    nickname: ""
  });
  const dispatch = useDispatch();
  const handlerChange = ({ name, value }) => {
    setForm(prevState => ({ ...prevState, [name]: value }));
  };
  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(updateUser({ nickname: form.nickname }));
  };
  return (
    <MainLayout>
      <form onSubmit={handlerSubmit} className="w-[695px] flex flex-col">
        <PageTitle>Настройки</PageTitle>
        <div className="flex flex-col gap-4">
          <TextField
            value={form.nickname}
            onChange={handlerChange}
            name="nickname"
            label="Ник"
            placeholder="Ник"
            limit={30}
          />
          <div>
            <Button>Сохранить</Button>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default Settings;
