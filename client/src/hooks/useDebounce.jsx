import { useMemo } from "react";
import debounce from "../utils/debounce";

const useDebounce = (cb, ms) => {
  return useMemo(() => debounce(cb, ms), [ms]);
};

export default useDebounce;
