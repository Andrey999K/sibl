import React, { useState } from "react";
import TextField from "../../common/TextField";
import Button from "../../common/Button";
import userService from "../../../services/user.service";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/user.slicer";

const Settings = () => {
  const [form, setForm] = useState({
    nickname: ""
  });
  const dispatch = useDispatch();
  const handlerChange = ({ name, value }) => {
    setForm(prevState => ({ ...prevState, [name]: value }));
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    userService.update({ ...form })
      .then(({ content }) => dispatch(updateUser({ nickname: content })))
      .catch(() => {});
  };
  return (
    <form
      onSubmit={handlerSubmit}
      className="w-[695px] my-12 flex flex-col gap-4"
    >
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
    </form>
  );
};

export default Settings;
