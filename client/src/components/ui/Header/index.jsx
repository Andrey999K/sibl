/* eslint-disable multiline-ternary */
import React from "react";
import Logo from "../Logo";
import { useLocation } from "react-router-dom";
import Search from "../Search";
import MenuProfile from "../MenuProfile";
import { useSelector } from "react-redux";
import { getLoadingUser, getUser } from "../../../store/user.slicer";
import ButtonLink from "../../common/ButtonLink";
import Loader from "../Loader";

const Header = () => {
  const location = useLocation();
  const homepage = process.env.PUBLIC_URL;
  const isShowSearch = ["", "user", "my_posts"].includes(location.pathname.replace(homepage, "").split("/")[1]);
  const userData = useSelector(getUser());
  const isLoading = useSelector(getLoadingUser());
  if (isLoading) return <Loader />;
  return (
    <header className="bg-my-green-200 py-2 sticky top-0 z-[9998]">
      <div className="flex justify-between items-center w-full max-w-screen-xl px-8 mx-auto">
        <Logo />
        {isShowSearch && (
          <div className="w-full max-w-2xl flex items-center gap-4">
            <div className="flex items-center w-full">
              <Search />
            </div>
            <ButtonLink url={`${process.env.PUBLIC_URL}/create_post`}>Создать</ButtonLink>
          </div>
        )}
        {userData ? (
          <div className="flex items-center gap-3 text-white">
            <p className="font-semibold text-xl">{userData.nickname}</p>
            <div className="relative flex items-center">
              <MenuProfile />
            </div>
          </div>
        ) : (
          <ButtonLink url={`${process.env.PUBLIC_URL}/login`}>Войти</ButtonLink>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);
