import clsx from "clsx";
import {
	ButtonHTMLAttributes, FC, ReactNode, useMemo,
} from "react";
import { Loader } from "@/shared/ui/Loader";
import cls from "../common/style.module.scss";
import { ButtonModifier } from "../common/types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	Icon?: FC<React.SVGProps<SVGSVGElement>>;
	isLoading?: boolean;
	modifier?: ButtonModifier;
}

export const Button: FC<ButtonProps> = ({
	className,
	children,
	Icon,
	modifier = "",
	isLoading = false,
	...otherProps
}) => {
	return (
		<button
			disabled={isLoading}
			className={clsx(cls.Button, {
				[cls.Button_loader]: isLoading,
			}, [className])}
			{...otherProps}
		>
			{children}
			{isLoading ? <Loader className={cls.Button__loader} /> : null}
		</button>
	);
};
