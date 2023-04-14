import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import EditInput from './EditInput';
import handleInputChange from '../utils/handleInputChange';
import EditOnButton from '../components/EditOnButton';
import EditSelect from './EditSelect';
import DeleteButton from './DeleteButton';
import { prioritizeMessage, desprioritizeMessage } from '../api/messages';

const TableMessage = ({ message }) => {
  const { userGlobalState, setMessages, messages } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [pinnedLoading, setPinnedLoading] = useState(false);
  const [editOn, setEditOn] = useState(false);
  const [editedMessage, setEditedMessage] = useState({
    ...message, 
    start_date: message.startDate,
    end_date: message.endDate,
    user_id: String(userGlobalState.id),
  });

  const changePriority = async () => {
    setPinnedLoading(true);
    try {
      if(message.priority) {
        const response = await desprioritizeMessage(userGlobalState.token);
        if(response.data) {
          const newMessagesState = messages.map((messageFound) => {
            return {
              ...messageFound,
              priority: 0
            }
          })
  
          setMessages(newMessagesState);
          setPinnedLoading(false);
        }
        setPinnedLoading(false);
      } else {
        const response = await prioritizeMessage(message.id, userGlobalState.token);
        if (response.message === 'Mensagem priorizada com sucesso') {
          setPinnedLoading(false);
          const newMessagesState = messages.map((messageFound) => {
            if(Number(messageFound.id) === Number(message.id)) {
              return {
                ...messageFound,
                priority: 1
              }
            }
            return {
              ...messageFound,
              priority: 0
            }
          })
  
          setMessages(newMessagesState);
        }
      }
    } catch (error) {
      setPinnedLoading(false);
    }
  };

  return (
    <div className="messages__div">
        <div className='pinned_div' onClick={pinnedLoading ? () => {} : () => changePriority()}>
          {pinnedLoading? <section className='loader'></section> : <img className={'pinned_icon'} src={!message.priority ? require("../images/unpinned.png") : require("../images/pinned.png")}/>}
        </div>
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
