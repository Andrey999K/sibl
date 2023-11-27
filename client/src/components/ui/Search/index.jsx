import React from "react";
import TextField from "../../common/TextField";
import { useDispatch, useSelector } from "react-redux";
import { getSearch, setSearch } from "../../../store/search.slicer";

const Search = () => {
  const search = useSelector(getSearch());
  const dispatch = useDispatch();
  const handleChange = ({ value }) => {
    dispatch(setSearch(value));
  };
  return (
    <TextField
      value={search}
      onChange={handleChange}
      name=""
      placeholder="Поиск"
      className="bg-my-green-100 !w-full !px-3 !py-1 placeholder:text-my-green-400 outline-none !border-none"
    />
  );
};

export default Search;
