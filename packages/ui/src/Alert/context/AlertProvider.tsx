import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Alert, AlertVariantType } from '../Alert';
import { AlertContext, AlertContextType } from './AlertContext';

const ELEMENT_ID = 'alert-ui';

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (!document.getElementById(ELEMENT_ID)) {
      const container = document.createElement('div');
      container.id = ELEMENT_ID;
      document.body.appendChild(container);
    }
  }, []);

  const showAlert = (message: string, variant?: AlertVariantType) => {
    const alertContainer = document.getElementById(ELEMENT_ID);

    if (alertContainer) {
      ReactDOM.render(
        <Alert message={message} variant={variant} />,
        alertContainer
      );
    }
  };

  const contextValue: AlertContextType = { showAlert };

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};