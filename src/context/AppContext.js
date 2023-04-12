import { createContext } from 'react';

export const AppContext = createContext({
    userGlobalState: { id: 0, name: "", email: "", token: "" },
    setUserGlobalState: () => {},
    messages: [],
    setMessages: () => {},
  });

export default AppContext;