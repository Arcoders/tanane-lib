import { Button } from 'tanane-lib-ui';
import css from './Styles.module.scss'
import classnames from '../utils/classnames'

export type AlertVariantType = 'primary' | 'success' | 'warning' | 'error' | 'danger';
export interface AlertProps {
	variant?: AlertVariantType;
	message: string;
	closeAlert: () => void;
}

export const Alert: React.FC<AlertProps> = ({ variant = 'primary', message, closeAlert }) => (
	<div className={classnames(css.alert, css[`alert--${variant}`])}>
		<span>{message}</span>
		<Button onClick={closeAlert} color={variant} size="small" modifiers={css.close}>X</Button>
	</div>
);

Alert.displayName = 'Alert';

