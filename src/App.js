import React from 'react';
import Routes from './Routes';
import GlobalStateProvider from './context/GlobalStateProvider';

const App = () => {
  return (
    <div>
      <GlobalStateProvider>
        <Routes />
      </GlobalStateProvider>
    </div>
  );
}

export default App;
