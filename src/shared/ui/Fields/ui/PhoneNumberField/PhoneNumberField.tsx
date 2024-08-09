import clsx from "clsx";
import {
	ComponentProps,
	FC, forwardRef,
} from "react";
import { PhoneInput } from "react-international-phone";
import { animated, useTransition } from "react-spring";
import cls from "./PhoneNumberField.module.scss";

interface PhoneNumberFieldProps extends ComponentProps<typeof PhoneInput> {
	className?: string;
	error?: string;
	withValidation: boolean;
	onChange: any;
}

export const PhoneNumberField: FC<PhoneNumberFieldProps> = forwardRef(({
	className, error, withValidation, onChange, ...otherProps
}, ref) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const transition = withValidation ? useTransition(!!error, {
		config: { duration: 300 },
		from: {
			scale: 0,
			opacity: 0,
		},
		enter: {
			scale: 1,
			opacity: 1,
		},
		leave: {
			scale: 0,
			opacity: 0,
		},
	}) : null;

	return (
		<div className={clsx(cls.PhoneNumberField, {
			[cls.PhoneNumberField_error]: !!error && withValidation,
		}, [className])}
		>
			<PhoneInput className={cls.PhoneNumberField__this} {...otherProps} onChange={onChange} ref={ref} />
			{transition && transition((styles, isError) => (
				isError && (
					<animated.span style={styles} className={cls.PhoneNumberField__error}>
						{error}
					</animated.span>
				)
			))}
		</div>
	);
});
