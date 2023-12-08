import css from './Styles.module.scss'
import classnames from '../utils/classnames'

export type AlertVariantType = 'primary' | 'success' | 'warning' | 'danger';
export interface AlertProps {
	variant?: AlertVariantType;
	message: string;
	display: boolean;
}

export const Alert: React.FC<AlertProps> = ({ variant = 'primary', message, display }) => (
	<>
		{display && <div className={classnames(css.alert, css[`alert--${variant}`])}>
			<span>{message}</span>
		</div>}
	</>
);

Alert.displayName = 'Alert';

