import { Button } from 'tanane-lib-ui';
import css from './Styles.module.scss'
import classnames from '../utils/classnames'
import { useState } from 'react';

export type AlertVariantType = 'primary' | 'success' | 'warning' | 'error' | 'danger';

export interface AlertProps {
	variant?: AlertVariantType;
	message: string;
}

export const Alert: React.FC<AlertProps> = ({ variant = 'primary', message }) => {
	const [closed, setClosed] = useState<boolean>(false);

	const handleClose = () => {
		setClosed(true);
	};

	return (
		<>
			{!closed && <div className={classnames(css.alert, css[`alert--${variant}`])}>
				<span>{message}</span>
				<Button onClick={handleClose} color={variant} size="small" modifiers={css.close}>X</Button>
			</div>}
		</>
	)
}

Alert.displayName = 'Alert';

