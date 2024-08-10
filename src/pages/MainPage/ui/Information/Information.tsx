import clsx from "clsx";
import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { Devices } from "@/shared/const/devices";
import GlobeIcon from "../../assets/globe.svg?react";
import { BenefitsList } from "../BenefitsList/BenefitsList";
import cls from "./Information.module.scss";

interface InformationProps {
	className?: string
}

export const Information: FC<InformationProps> = ({ className }) => {
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });

	return (
		<div className={clsx(cls.Information, {}, [className])}>
			<div className={clsx(cls.Webinar, cls.Information__webinar)}>
				<GlobeIcon className={cls.Webinar__icon} />
				Вебинар
			</div>
			<h1 className={clsx(cls.Title, cls.Information__title)}>
				<span className={cls.Title__top}>front-end</span>
				<span className={cls.Title__bottom}>
					<div className={cls.Title__mark}>
						<span className={cls.Title__marked}>с нуля</span>
					</div>
					легкий старт в IT профессии
				</span>
			</h1>
			<p className={clsx(cls.Text, cls.Information__text)}>
				Узнайте какими
				<b className={cls.Text__bold}>навыками должен обладать фронтенд разработчик в 2022 году</b>
				и как начать карьеру в востребованной профессии
			</p>
			{!isMobile && <BenefitsList />}
		</div>
	);
};
