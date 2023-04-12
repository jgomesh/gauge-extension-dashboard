import React from 'react';

const ErrorBox = ({ error }) => {
  return (
          <div>
            {error.errorThrow && (
              <>
                <h4>{error.message}</h4>
              </>
            )}
          </div>
  );
};

export default ErrorBox;
