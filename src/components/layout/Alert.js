import React from 'react';

const Alert = ({ alert }) => {
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
