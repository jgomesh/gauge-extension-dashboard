import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

const TableHeader = ({ setLoading, loading }) => {
  return (
    <div className='table__header'>
      <h3>Notificações:</h3>

      <FontAwesomeIcon
        onClick={() => setLoading(true)}
        className={`update_button ${loading ? "rotate" : ""}`}
        icon={faRefresh}
        />
        
    </div>
  );
};

export default TableHeader;
