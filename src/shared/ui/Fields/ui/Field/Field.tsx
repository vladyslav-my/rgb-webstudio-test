import { Transition } from "@headlessui/react";
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
			<Transition
				show={!!error}
				as="span"
				className={cls.Field__error}
				enter={cls.Field__errorEnter}
				enterFrom={cls.Field__errorEnterFrom}
				enterTo={cls.Field__errorEnterTo}
				leave={cls.Field__errorLeave}
				leaveFrom={cls.Field__errorLeaveFrom}
				leaveTo={cls.Field__errorLeaveTo}
			>
				{error}
			</Transition>

		</div>
	);
});
