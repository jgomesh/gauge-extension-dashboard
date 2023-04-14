import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { deleteMessage } from '../api/messages';

const DeleteButton = ({ message, setLoading, editOn, loading }) => {
  const { messages, setMessages } = useContext(AppContext);
  const [confirm, setConfirm] = useState(false);
  const [confirmInput, setConfirmInput] = useState('');
  
  const handleDelete = async () => {
    setLoading(true);
    const response = await deleteMessage(String(message.id), JSON.parse(localStorage.getItem("token")).value);
    if (response && response.data && response.data.length === 0) {
      const newMessageState = messages.filter((previousMessage) => String(previousMessage.id) !== String(message.id));
      setMessages(newMessageState);
      setConfirm(false);
      setLoading(false);
      setConfirmInput("")
      return 
    };
    setLoading(false);
    setConfirmInput("")
  };

  const handleConfirmInput = (event) => {
    setConfirmInput(event.target.value);
  };

  return (
    <>
      <div>
        {!editOn && (loading ? (
          <button>Loading...</button>
        ) : (
          <button onClick={() => setConfirm(true)}>X</button>
        ))}
      </div>
      {confirm && (
        <div className='delete__confirm'>
          <p>
            Você está prestes a excluir a publicação com o nome {message.title}.
            Tem certeza? Digite "CONFIRMAR" para excluir a publicação.
          </p>

          <input type="text" value={confirmInput} onChange={handleConfirmInput} />
          <div className='buttons'>
            {loading ? <button className='align__buttons'><p className='loader'></p></button>:<button disabled={confirmInput !== "CONFIRMAR"} onClick={handleDelete}>Confirmar</button>}
            <button onClick={() => setConfirm(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;
