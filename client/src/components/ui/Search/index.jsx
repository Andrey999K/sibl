import React, { useContext } from "react";
import TextField from "../../common/TextField";
import { SearchContext } from "../../../App";

const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  // const [search, setSearch] = useState("");
  const handleChange = ({ value }) => {
    setSearch(value);
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
