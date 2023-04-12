import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const RequestButton = ({requestFunction, setGlobalState, data, setError, disabled, title } ) => {
  const [loading, setLoading] =  useState(false);
  const navigate = useNavigate();

  return (
    <>
        { !loading ? (
          <button
            disabled={disabled}
            title={title}
            onClick={(event) => requestFunction(event, data, setGlobalState, navigate, setLoading, setError)}
            type="submit">
              Entrar
          </button>
        ) : <button type="submit" onClick={(event) => event.preventDefault()}><div className="loader"></div></button>}
    </>
  );
};

export default RequestButton;
