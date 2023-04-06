import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import useRequest from '../hook/useRequest';
import { getMessagesActive } from '../api/messages';
import useGetMessages from '../hook/useGetMessages';
import TableHeader from './TableHeader';
import MessagesTableBody from './MessagesTableBody';
import { useNavigate } from 'react-router-dom';

const MessagesTable = ({ messages }) => {
  const { setMessages, userGlobalState } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  useRequest(setMessages, loading, setLoading, getMessagesActive, userGlobalState.token);
  const navigate = useNavigate();
  useGetMessages(setMessages, getMessagesActive, undefined, userGlobalState.token, setLoading, navigate);

  return (
    <section className='notifications__section'>
      <TableHeader
        setLoading={setLoading} loading={loading} />
      <MessagesTableBody
        loading={loading}
        messages={messages}
      />
    </section>
  );
};

export default MessagesTable;
