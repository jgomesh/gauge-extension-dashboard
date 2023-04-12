import React from 'react';

const EditButton = ({ editOn, content, handleInputChange, value, name, type, placeholder, className }) => {
  return (
    <>
     
        {editOn ? (
          <input  type={type} name={name} value={value} onChange={(event) => handleInputChange(event)} />
        ) : (
          <label className='flat'><span>{placeholder}</span><span className={className}>{content}</span></label>
        )}
      
    </>
  );
};

export default EditButton;
