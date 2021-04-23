import React, { useContext } from 'react';

import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    <div>
      {(alert !== null && alert.type === 'danger') && <p className="invalid-feedback d-block pt-1 mb-0"><strong>{alert.msg}</strong></p>}
    </div>
  )
}

export default Alert;