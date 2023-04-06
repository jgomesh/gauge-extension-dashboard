import { useEffect } from "react";

const useRequest = (setFunction, loading, setLoading, getFunction, token ) => {
  useEffect(() => {
    if(loading === true) {
      const getData = async () => {
        const response = await getFunction(token);
        setFunction(response.data);
        setLoading(false);
      }
      getData();
    }
  }, [loading]);
}

export default useRequest;