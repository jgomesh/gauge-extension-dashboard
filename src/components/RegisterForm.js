import React, { useState, useEffect, useContext } from 'react';
import handleInputChange from '../utils/handleInputChange';
import { createMessage } from '../api/messages';
import AppContext from '../context/AppContext';

const RegisterForm = () => {
  const { messages, setMessages, userGlobalState } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    message: '',
    type: Number('2'),
    start_date: '',
    end_date: '',
    user_id: JSON.parse(localStorage.getItem("user_logged")).id,
  });

  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (
      formValues.title &&
      formValues.title.length >= 20 &&
      formValues.message &&
      formValues.message.length >= 50 &&
      formValues.type &&
      formValues.start_date &&
      formValues.end_date
    ) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  }, [formValues]);

  const registerNewNotification = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await createMessage(formValues, userGlobalState.token);
    if(response.message === "Cadastro realizado com sucesso") {
      const newMessagesState = [ ...messages, { ...response.data, end_date: response.data.endDate }];
      setMessages(newMessagesState);
    }
    setFormValues({
      title: '',
      message: '',
      type: Number('2'),
      start_date: '',
      end_date: '',
      user_id: String(userGlobalState.id),
    })
    setLoading(false);
  };

  return (
    <div className="messages__div">
      <label>
        Title:
        <input type="text" name="title" placeholder="Minimum 20 characters" value={formValues.title} onChange={(event) => handleInputChange(event, setFormValues)} minLength={20} />
      </label>
      <label>
        Message:
        <textarea name="message" placeholder="Minimum 50 characters" value={formValues.message} onChange={(event) => handleInputChange(event, setFormValues)} minLength={50} />
      </label>
      <label>
        Type:
        <select name="type" value={formValues.type} onChange={(event) => handleInputChange(event, setFormValues)}>
          <option value={1}>alert</option>
          <option value={2}>information</option>
          <option value={3}>error</option>
        </select>
      </label>
      <label>
        Start Date:
        <input type="date" name="start_date" value={formValues.start_date} onChange={(event) => handleInputChange(event, setFormValues)} />
      </label>
      <label>
        End Date:
        <input type="date" name="end_date" value={formValues.end_date} onChange={(event) => handleInputChange(event, setFormValues)} />
      </label>
      {loading ? (
        <button>
          Loading...
        </button>
      ): (
        <button onClick={registerNewNotification} disabled={!formCompleted}>
          Registrar
        </button>
      )}
      
    </div>
  );
};

export default RegisterForm;
