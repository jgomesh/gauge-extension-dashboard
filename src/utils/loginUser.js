import { login } from '../api/login'

const loginUser = async (
  event,
  userData,
  setUserGlobalState,
  navigate,
  setLoading,
  setError,
  ) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(async () => {

      // MAKE THE REQUEST TO THE API
      const response = await login(userData.email, userData.password);
      if((response && response.token)) {
        setUserGlobalState({ isLogged: true, ...response.user, token: response.token});
        localStorage.setItem('user_logged', JSON.stringify({...response.user}));
        localStorage.setItem('token', response.token);
        navigate('/home');
        setLoading(false);
        return response;
      }
      // IF SOMETHING IS WRONG RETURN THE ERROR MESSAGE
      setError({
        errorThrow: true,
        message: `Corrija o email ou a senha! `
      })
      setLoading(false);
      setTimeout(() => {
        setError({
          errorThrow: false,
        })
      },5000)
      return response;
    }, 3000)
}

export default loginUser;