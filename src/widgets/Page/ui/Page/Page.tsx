import clsx from "clsx";
import {
	FC, ReactNode,
	memo,
} from "react";
import { useMediaQuery } from "react-responsive";
import { Devices } from "@/shared/const/common";
import TwoDecorationImage from "../../assets/decoration-2.png";
import DecorationImage from "../../assets/decoration.png";
import { Header } from "../Header/Header";
import cls from "./Page.module.scss";

interface PageProps {
	className?: string;
	children?: ReactNode;
}

export const Page: FC<PageProps> = memo(({
	className, children,
}) => {
	const isNotIntermediateDesktop = useMediaQuery({ minWidth: Devices.INTERMEDIATE_DESKTOP });
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });

	return (
		<div className={cls.Page}>
			<Header className={cls.Page__header} />
			<main className={clsx(cls.Page__main, [className])}>
				{children}

			</main>
			{
				!isMobile ? (
					<>
						<div className={cls.Page__ellipse_1} />
						<div className={cls.Page__ellipse_2} />
					</>
				) : <div className={cls.Page__ellipse_3} />
			}
			{isNotIntermediateDesktop && <img className={cls.Page__decoration} src={DecorationImage} />}
			{isNotIntermediateDesktop && <p className={cls.Page__twoDecoration}>front-end developer</p>}
		</div>
	);
});
