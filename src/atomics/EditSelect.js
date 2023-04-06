import React from 'react';

const EditSelect = ({ messageType, handleIconChange, editOn, type }) => {
  const icons = { "1": "alert", "2": "information", "3": "error" };

  return (
    <>
        {editOn ? (
          <select name="type" value={messageType} onChange={(event) => handleIconChange(event)}>
            <option value="1">alert</option>
            <option value="2">information</option>
            <option value="3">error</option>
          </select>
        ) : (
          <span>{icons[type]}</span>
        )}
    </>
  );
};

export default EditSelect;
