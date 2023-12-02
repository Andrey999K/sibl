import React from "react";
import logOut from "../../../utils/logOut";
import { deleteUser } from "../../../store/user.slicer";
import { useDispatch } from "react-redux";
import ContextMenu from "../../common/ContextMenu";

const MenuProfile = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    logOut();
    dispatch(deleteUser());
  };
  return (
    <ContextMenu
      list={[
        { text: "Настройки", action: "/settings" },
        { text: "Мои посты", action: "/my_posts" },
        { text: "Выход", action: handleLogOut }
      ]}
      icon="arrow-bottom"
      className="w-[150px] top-8 flex flex-col gap-2"
    />
  );
};

export default MenuProfile;
