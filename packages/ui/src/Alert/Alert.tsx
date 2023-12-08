import css from './Styles.module.scss'
import classnames from '../utils/classnames'

export type AlertVariantType = 'primary' | 'success' | 'warning' | 'danger';
export interface AlertProps {
	variant?: AlertVariantType;
	message?: string;
}

export const Alert: React.FC<AlertProps> = ({ message, variant = 'primary' }) => (
	<>
		{message && <div className={classnames(css.alert, css[`alert--${variant}`])}>
			<span>{message}</span>
		</div>}
	</>
);

Alert.displayName = 'Alert';

