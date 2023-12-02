import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getLoadingUser, setUser } from "../../store/user.slicer";
import { getSearch } from "../../store/search.slicer";
import useDebounce from "../../hooks/useDebounce";
import { setPostList } from "../../store/postList.slicer";
import Loader from "../../components/ui/Loader";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingUser());
  const search = useSelector(getSearch());
  const firstRender = useRef(true);
  const sendRequest = useDebounce(search => {
    dispatch(setPostList({ search }));
  });
  useEffect(() => {
    if (!firstRender.current) sendRequest(search);
  }, [search]);
  useEffect(() => {
    dispatch(setUser());
    dispatch(setPostList({ search }));
  }, []);
  if (isLoading) return <Loader />;
  return <>{children}</>;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default AppLoader;
