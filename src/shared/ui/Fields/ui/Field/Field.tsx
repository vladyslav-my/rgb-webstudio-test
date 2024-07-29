import clsx from "clsx";
import { FC, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import cls from "./Field.module.scss";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	error?: FieldError["message"];
	register?: any;
}

export const Field: FC<FieldProps> = forwardRef(({
	className, error, register, ...otherProps
}, ref) => {
	return (
		<div className={clsx(cls.Field, {}, [className])}>
			<input className={cls.Field__input} ref={ref} {...otherProps} {...register} />
			{error && (
				<span className={cls.Field__error}>
					{error}
				</span>
			)}
		</div>
	);
});
