import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import MessagesTable from '../components/MessagesTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logoutUser from '../utils/logoutUser';
import useLoginCheck from '../hook/useLoginCheck';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setUserGlobalState, userGlobalState } = useContext(AppContext);
  const navigate = useNavigate();
  useLoginCheck(setUserGlobalState, navigate);

  return (
    <section className='home__page'>
      <header className='home__page__header'>
        <div>
          <img className='home__page__logo' alt="Gauge Logo" src={require("../images/logo_white.png")} />
          {loading ? <section className="loader"></section> : <FontAwesomeIcon className='logout__icon' onClick={() => logoutUser(setUserGlobalState, navigate, userGlobalState, loading, setLoading)} icon={faSignOutAlt} /> }
        </div>
      </header>
      
      <MessagesTable messages={messages} />
    </section>
  );
};

export default Home;
