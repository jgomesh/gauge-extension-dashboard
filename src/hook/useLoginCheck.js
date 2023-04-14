import { useEffect } from "react";

function checkExpiration() {
  const token = JSON.parse(localStorage.getItem('token'));

  if (token && new Date().getTime() > token.expirationTime) {
    localStorage.removeItem('token');
  }
}

const useLoginCheck = (setUserGlobalState, navigate) => {
  useEffect(() => {
      checkExpiration();
      const token = JSON.parse(localStorage.getItem('token'));
      const user_logged = JSON.parse(localStorage.getItem('user_logged'));
      if(token && token.value && !!token.value.length) {
        setUserGlobalState({token: token.value, user_logged});
        if(window.location.pathname) {
          setUserGlobalState({token: token.value, user_logged});
          navigate('/home')
        }
        return 
      }
      navigate('/')
    }, [])
}

export default useLoginCheck;