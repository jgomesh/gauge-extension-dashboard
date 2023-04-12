import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import handleInputChange from '../utils/handleInputChange';
import loginUser from '../utils/loginUser';
import RequestButton from '../components/RequestButton';
import ErrorBox from '../components/ErrorBox';
import validateInputs from '../utils/validateInputs';
import useLoginCheck from '../hook/useLoginCheck';

const Login = () => {
  const { setUserGlobalState } = useContext(AppContext);
  const [userData, setUserData] = useState({email: "", password: ""});
  const [error, setError] = useState({ errorThrow: false, message: "" });
  const [validInputs, setValidInputs] = useState(false);
  const navigate = useNavigate();
  useLoginCheck(setUserGlobalState, navigate);
  return (
    <section className='login__page'>
      <form className='login__page__form'>
        <img className='login__page__form__logo' alt="Gauge Logo" src={require("../images/logo_white.png")} />
        <input placeholder='Email' type="email" name="email" onChange={(event) => {
          handleInputChange(event, setUserData);
          validateInputs({...userData, [event.target.name]: event.target.value, setValidInputs});
        }} />
        <input placeholder='Password' type="password" name="password" onChange={(event) => {
          handleInputChange(event, setUserData);
          validateInputs({...userData, [event.target.name]: event.target.value, setValidInputs});
        }}/>
        <ErrorBox error={error} />
        <RequestButton
          requestFunction={loginUser}
          setGlobalState={setUserGlobalState}
          data={userData}
          setError={setError}
          disabled={!validInputs}
          title={"Coloque o email e a senha!"}
        />
      </form>
    </section>
  );
};

export default Login;
