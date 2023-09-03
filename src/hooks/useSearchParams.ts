import { useLocation } from "react-router-dom";

type StringMap = { [key: string]: string };

function useSearchParams(): StringMap {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const params: StringMap = {};
  for (const [key, value] of query.entries()) {
    params[key] = value;
  }

  return params;
}

export default useSearchParams;
