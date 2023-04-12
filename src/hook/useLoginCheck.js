import { useEffect } from "react";

const useLoginCheck = (setUserGlobalState, navigate) => {
  useEffect(() => {
      const token = localStorage.getItem('token');
      const user_logged = JSON.parse(localStorage.getItem('user_logged'));
      if(token && !!token.length) {
        setUserGlobalState({token, user_logged});
        if(window.location.pathname) {
          setUserGlobalState({token, user_logged});
          navigate('/home')
        }
        return 
      }
      console.log(window.location.pathname)
      navigate('/')
    }, [])
}

export default useLoginCheck;