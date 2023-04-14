import React, { useState } from 'react';
import AppContext from './AppContext';

const GlobalStateProvider = ({ children }) => {
  const [userGlobalState, setUserGlobalState] = useState({id: 0, name: "", email: "", token: JSON.parse(localStorage.getItem('token')).value});
  const [messages, setMessages] = useState([]);
  return (
    <AppContext.Provider value={{ userGlobalState, setUserGlobalState, messages, setMessages }}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalStateProvider;