import { useEffect } from "react";
import { logout} from "../api/login"
const useGetMessages = (setFunction, getFunction, data = undefined, token, setLoading, navigate) => {
  useEffect(() => {
    setLoading(true);
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
    }
    getData();
  }, [])
}

export default useGetMessages;