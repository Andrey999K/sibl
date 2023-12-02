import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "../../components/ui/Header";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <>
      <ToastContainer className="z-[9999]" />
      <div className="bg-[#F2F4F3] min-h-[100dvh] flex flex-col pb-20">
        <Header />
        <div className="mx-auto w-full h-full max-w-screen-xl px-8 flex justify-center pt-12">
          <div className="w-[995px]">{children}</div>
        </div>
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default MainLayout;
