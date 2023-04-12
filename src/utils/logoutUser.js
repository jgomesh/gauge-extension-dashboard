import { logout } from "../api/login";

const logoutUser = async (setUserGlobalState , navigate, userGlobalState, loading, setLoading) => {
  setLoading(true);
  await logout(userGlobalState.token).catch((error) => {
    console.log(error.message);
    localStorage.removeItem("user_logged");
    localStorage.removeItem("token");
    setUserGlobalState({ id: 0, name: "", email: "", token:"" });
    setLoading(false);
    navigate('/');
  });
  
  localStorage.removeItem("user_logged");
  localStorage.removeItem("token");
  setUserGlobalState({ id: 0, name: "", email: "", token:"" });
  navigate('/')
  setLoading(false);
}

export default logoutUser;
