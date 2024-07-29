import clsx from "clsx";
import {
	ComponentProps, FC, ReactNode, memo,
} from "react";
import { NavLink } from "react-router-dom";
import cls from "../common/style.module.scss";
import { ButtonModifier } from "../common/types";

interface NavLinkButtonProps extends ComponentProps<typeof NavLink> {
	className?: string;
	children: ReactNode;
	to: string;
	modifier?: ButtonModifier;
}

export const NavLinkButton: FC<NavLinkButtonProps> = memo(({
	className,
	children,
	to,
	...otherProps
}) => {
	return (
		<NavLink to={to} className={clsx(cls.Button, [className])} {...otherProps}>
			{children}
		</NavLink>
	);
});
