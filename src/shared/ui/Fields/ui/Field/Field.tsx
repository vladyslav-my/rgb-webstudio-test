import clsx from "clsx";
import { FC, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { useTransition, animated } from "react-spring";
import cls from "./Field.module.scss";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	error?: FieldError["message"];
	register?: any;
	withValidation?: boolean;
}

export const Field: FC<FieldProps> = forwardRef(({
	className, error, withValidation, ...otherProps
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
		<div className={clsx(cls.Field, {
			[cls.Field_error]: !!error && withValidation,
		}, [className])}
		>
			<input className={cls.Field__input} ref={ref} {...otherProps} />
			{transition && transition((styles, isError) => (
				isError && (
					<animated.span style={styles} className={cls.Field__error}>
						{error}
					</animated.span>
				)
			))}
		</div>
	);
});
