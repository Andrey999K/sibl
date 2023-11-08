import React, { useState } from "react";
import Logo from "../Logo";
import BigButton from "../../common/BigButton";
import Icon from "../../common/Icon";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search";
import { useAuth } from "../../../hooks/useAuth";
import MenuProfile from "../MenuProfile";
import { useSelector } from "react-redux";
import { getUser } from "../../../store/user.slicer";

const Header = () => {
  const [openMenuProfile, setOpenMenuProfile] = useState(false);
  const location = useLocation();
  const homepage = process.env.PUBLIC_URL;
  const isLoginPage = location.pathname === `${homepage}/login`;
  const userData = useSelector(getUser());
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  const toggleMenuProfile = () => {
    setOpenMenuProfile(prevState => !prevState);
  };
  return (
    <header className="bg-my-green-200 py-2 sticky top-0 z-[9998]">
      <div className="flex justify-between items-center w-full max-w-screen-xl px-8 mx-auto">
        {!isLoginPage &&
          <ul className="inline-flex flex-col absolute top-32">
            <li className="shrink hover:bg-gray-50 py-2 px-3 rounded duration-200">
              <Link to={homepage} className="flex gap-4">
                <div className="flex justify-center items-center">
                  <Icon name="fire"/>
                </div>
                <span>Популярное</span>
              </Link>
            </li>
            <li className="shrink hover:bg-gray-50 py-2 px-3 rounded duration-200">
              <Link to={homepage} className="flex gap-4">
                <div className="flex justify-center items-center">
                  <Icon name="clock"/>
                </div>
                <span>Свежее</span>
              </Link>
            </li>
            <li className="shrink hover:bg-gray-50 py-2 px-3 rounded duration-200">
              <Link to={homepage} className="flex gap-4">
                <div className="flex justify-center items-center">
                  <Icon name="bookmark"/>
                </div>
                <span>Закладки</span>
              </Link>
            </li>
            <li className="shrink hover:bg-gray-50 py-2 px-3 rounded duration-200">
              <Link to={homepage} className="flex gap-4">
                <div className="flex justify-center items-center">
                  <Icon name="list"/>
                </div>
                <span>Подписки</span>
              </Link>
            </li>
          </ul>
        }
        <Logo />
        {!isLoginPage &&
          <div className="w-full max-w-2xl flex items-center gap-4">
            <div className="flex items-center w-full">
              <Search/>
            </div>
            <BigButton
              link={true}
              url={`${process.env.PUBLIC_URL}/create_post`}
            >Создать</BigButton>
          </div>
        }
        {userData
          ? (
            <div className="flex items-center gap-3 text-white">
              <p className="font-semibold text-xl">{userData.email}</p>
              <div className="relative flex items-center">
                <button onClick={toggleMenuProfile}>
                  <Icon name="arrow-bottom" />
                </button>
                {openMenuProfile && <MenuProfile logOut={handleLogOut} closeMenu={() => setOpenMenuProfile(false)} />}
              </div>
            </div>
            )
          : <BigButton link={true} url={`${process.env.PUBLIC_URL}/login`}>Войти</BigButton>
        }
      </div>
    </header>
  );
};

export default Header;
