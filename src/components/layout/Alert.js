import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
	const alertContext = useContext(AlertContext);
	const { alert } = alertContext;

  return (
    <div className="container mt-4">
      {(alert !== null && alert.type === 'danger') && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`}>
          <i className="fa fa-exclamation-triangle pr-2"></i> {alert.msg}
        </div>
      )}
    </div>
  )
}

export default Alert;
