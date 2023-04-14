import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { editMessage } from '../api/messages';

const EditOnButton = ({ message, editedMessage, setEditOn, editOn }) => {
  const { userGlobalState, messages, setMessages } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (editedMessage.title.length >= 20 && editedMessage.message.length >= 50) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [editedMessage]);

  const handleSaveEdit = async () => {
    setLoading(true);
    setTimeout(async () => {
      const response = await editMessage(editedMessage, String(message.id), JSON.parse(localStorage.getItem("token")).value);
      if(response && response.message === "Mensagem atualizada com sucesso!") {
        const newMessagesState = messages.map((previousMessage => {
          if(String(previousMessage.id) === String(message.id)) {
            return {...editedMessage, startDate: editedMessage.start_date, endDate: editedMessage.end_date}
          };
          return previousMessage;
        }));
        setMessages(newMessagesState);
      }
      setEditOn(false);
      setLoading(false)
    }, 2000)
  };

  const handleCancelClick = () => {
    setEditOn(false);
  };

  return (
    <>
      {editOn ? (
        <>
          {!loading ? (
            <>
              <button onClick={handleSaveEdit} disabled={disabled}>Salvar</button>
              <button onClick={handleCancelClick}>Cancelar</button>
            </>
          ) : <button>Loading...</button>}
        </>
      ) : (
        <button onClick={() => setEditOn(true)} disabled={loading}>Editar</button>
      )}
    </>
  );
};

export default EditOnButton;
