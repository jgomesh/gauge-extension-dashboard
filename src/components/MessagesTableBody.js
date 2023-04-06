import React from 'react';
import RegisterForm from './RegisterForm';
import TableMessage from '../atomics/TableMessage';

const MessagesTableBody = ({ loading, messages }) => {
  return (
      <div className='notes__div'>
        { loading ? (
          <div>
            Loading...
          </div>
          ) : (
            <>
              {messages && messages.map((message, index) => (
                  <TableMessage key={`Table-Item-${index}`} message={message}/>
              ))}
              <RegisterForm />
            </>
          )}
      </div>
  );
};

export default MessagesTableBody;