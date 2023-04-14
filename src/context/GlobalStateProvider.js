import React, { useState } from 'react';
import AppContext from './AppContext';

const GlobalStateProvider = ({ children }) => {
  const tokenData = JSON.parse(localStorage.getItem('token'));
  let token = "";
  if(tokenData && tokenData.value) {
    token = tokenData.value
  }
  const [userGlobalState, setUserGlobalState] = useState({id: 0, name: "", email: "", token: token});
  const [messages, setMessages] = useState([]);
  return (
    <AppContext.Provider value={{ userGlobalState, setUserGlobalState, messages, setMessages }}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalStateProvider;