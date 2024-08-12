import { useSpring, animated } from "@react-spring/web";
import clsx from "clsx";
import { FC } from "react";
import CssImage from "../../assets/css.png";
import HtmlImage from "../../assets/html.png";
import JsImage from "../../assets/js.png";
import SublimeImage from "../../assets/sublime.png";
import VscodeImage from "../../assets/vscode.png";
import cls from "./Decoration.module.scss";

interface DecorationProps {
	className?: string;
}

export const Decoration: FC<DecorationProps> = ({ className }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const createSwingAnimation = (from: number, to: number, config: any) => useSpring({
		loop: { reverse: true },
		from: { transform: `rotate(${from}deg) scale(1.1)` },
		to: { transform: `rotate(${to}deg) scale(1)` },
		config: { ...config, delay: 1000 },
	});

	const animations = [
		createSwingAnimation(0, 5, { tension: 180, friction: 12 }),
		createSwingAnimation(0, -4, { tension: 200, friction: 10 }),
		createSwingAnimation(0, 5, { tension: 150, friction: 14 }),
		createSwingAnimation(0, -6, { tension: 220, friction: 8 }),
		createSwingAnimation(0, 5, { tension: 190, friction: 11 }),
	];

	const icons = [
		{
			name: "html",
			Icon: <img className={cls.Decoration__icon} src={HtmlImage} />,
		},
		{
			name: "css",
			Icon: <img className={cls.Decoration__icon} src={CssImage} />,
		},
		{
			name: "js",
			Icon: <img className={cls.Decoration__icon} src={JsImage} />,
		},
		{
			name: "sublime",
			Icon: <img className={cls.Decoration__icon} src={SublimeImage} />,
		},
		{
			name: "vscode",
			Icon: <img className={cls.Decoration__icon} src={VscodeImage} />,
		},
	];

	return (
		<div className={clsx(cls.Decoration, {}, [className])}>
			{icons.map(({ name, Icon }, index) => (
				<animated.div
					key={name}
					className={clsx(cls[`Decoration__wrapper_${name}`], cls.Decoration__wrapper)}
					style={animations[index]}
				>
					{Icon}
				</animated.div>
			))}
		</div>
	);
};
