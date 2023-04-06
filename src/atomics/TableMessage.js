import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import EditInput from './EditInput';
import handleInputChange from '../utils/handleInputChange';
import EditOnButton from '../components/EditOnButton';
import EditSelect from './EditSelect';
import DeleteButton from './DeleteButton';

const TableMessage = ({ message }) => {
  const { userGlobalState } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [editOn, setEditOn] = useState(false);
  const [editedMessage, setEditedMessage] = useState({
    ...message, 
    start_date: message.startDate,
    end_date: message.endDate,
    user_id: String(userGlobalState.id),
  });

  return (
    <div className="messages__div">
        <EditInput
          type="text"
          name="title"
          placeholder=''
          className="title__text"
          value={editedMessage.title}
          editOn={editOn}
          content={message.title}
          handleInputChange={(event) => handleInputChange(event, setEditedMessage)}
        />
        <EditInput
          type="text"
          name="message"
          placeholder='Mensagem: '
          value={editedMessage.message}
          editOn={editOn}
          className='paragraph__text'
          content={message.message}
          handleInputChange={(event) => handleInputChange(event, setEditedMessage)}
        />
        <EditInput
          type="date"
          name="start_date"
          placeholder='Data de início: '
          className='paragraph__text'
          value={editedMessage.start_date}
          editOn={editOn}
          content={message.startDate}
          handleInputChange={(event) => handleInputChange(event, setEditedMessage)}
        />
        <EditInput
          className='paragraph__text'
          type="date"
          name="end_date"
          placeholder='Data Final: '
          value={editedMessage.end_date}
          editOn={editOn}
          content={message.endDate}
          handleInputChange={(event) => handleInputChange(event, setEditedMessage)}
        />
        <EditSelect
          type={message.type}
          editOn={editOn}
          messageType={editedMessage.type}
          handleIconChange={(event) => handleInputChange(event, setEditedMessage)}
        />
        <EditOnButton
          editOn={editOn}
          setEditOn={setEditOn}
          editedMessage={editedMessage}
          message={message}
          disabled={true}
        />
        <DeleteButton
          loading={loading}
          editOn={editOn}
          message={message}
          setLoading={setLoading}
        />
    </div>
  );
};

export default TableMessage;
