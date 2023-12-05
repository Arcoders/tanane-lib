import { createContext } from 'react';
import { AlertVariantType } from '../Alert';

export interface AlertContextType {
    closeAlert: () => void;
    showAlert: (message: string, variant?: AlertVariantType) => void;
}

export const AlertContext = createContext<AlertContextType | undefined>(undefined);