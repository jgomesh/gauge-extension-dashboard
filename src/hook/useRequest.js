import { useEffect } from "react";
import { logout} from "../api/login"
const useRequest = (setFunction, loading, setLoading, getFunction, token, navigate ) => {
  useEffect(() => {
    if(loading === true) {
      const getData = async () => {
        const response = await getFunction(token);
        if (response.data && response.data.length >= 1) {
          setFunction(!response.data ? [] : response.data);
          setLoading(false);
        } else {
          logout(token);
          localStorage.removeItem("token");
          localStorage.removeItem("user_logged");
          navigate("/");
          setLoading(false);
        }
        setFunction(response.data);
        setLoading(false);
      }
      getData();
    }
  }, [loading]);
}

export default useRequest;