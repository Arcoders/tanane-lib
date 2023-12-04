import classnames from '../utils/classnames';
import css from './Styles.module.scss';

export type ButtonVariantType =
	| 'text'
	| 'contained'
	| 'outlined'

export type ButtonColorType =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'

export type ButtonVariantSize =
	| 'small'
	| 'medium'
	| 'large'

export interface ButtonProps
	extends React.ComponentPropsWithRef<'button'> {
	variant?: ButtonVariantType
	color?: ButtonColorType
	size?: ButtonVariantSize
	modifiers?: string
}

export const Button = ({
	variant = 'contained',
	color = 'primary',
	size = 'medium',
	modifiers = '',
	...props
}: ButtonProps) => (
	<button
		{...props}
		className={classnames(
			css.btn,
			css[`btn__${color}`],
			css[`btn--${size}`],
			css[`btn-${variant}__${color}`],
			modifiers
		)}>
		{props.children}
	</button>
)

Button.displayName = 'Button'
