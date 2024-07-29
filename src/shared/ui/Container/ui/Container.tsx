import clsx from "clsx";
import { FC, ReactNode, memo } from "react";
import cls from "./Container.module.scss";

interface ContainerProps {
	className?: string;
	children?: ReactNode;
	isDisabled?: boolean;
	modifier?: ContainerModifier;
}

export enum ContainerModifier {
	DEFAULT = "Container_default",
}

export const Container: FC<ContainerProps> = memo(({
	className, children, modifier = ContainerModifier.DEFAULT,
}) => {
	return (
		<div className={clsx(cls.Container, [className, cls[modifier]])}>
			{children}
		</div>
	);
});
