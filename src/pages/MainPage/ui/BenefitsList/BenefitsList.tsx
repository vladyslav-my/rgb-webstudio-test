import clsx from "clsx";
import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { Devices } from "@/shared/const/common";
import GiftImage from "../../assets/gift.png";
import KirillImage from "../../assets/kirill.png";
import cls from "./BenefitsList.module.scss";

interface BenefitsListProps {
	className?: string
}

export const BenefitsList: FC<BenefitsListProps> = ({ className }) => {
	const isSmallMobile = useMediaQuery({ maxWidth: Devices.SMALLMOBILE });

	return (
		<ul className={clsx(cls.BenefitsList, {}, [className])}>
			<li className={clsx(cls.BenefitsList__item, cls.BenefitsList__item_special)}>
				<div className={cls.BenefitsList__imageWrapper}>
					<img className={cls.BenefitsList__image} src={KirillImage} alt="" />
				</div>
				<div className={cls.BenefitsList__wrapper}>
					<h2 className={cls.BenefitsList__title}>
						Кирилл <span>Касатонов</span>
					</h2>
					<p className={cls.BenefitsList__text}>6 лет коммерческого опыта с такими  компаниями как Mercedes-Benz и другими крупными корпорациями</p>
				</div>
			</li>
			<li className={cls.BenefitsList__item}>
				<div className={cls.BenefitsList__imageWrapper}>
					<img className={cls.BenefitsList__image} src={GiftImage} alt="" />
				</div>
				<div className={cls.BenefitsList__wrapper}>
					<h2 className={cls.BenefitsList__title}>Бонус за регистрацию</h2>
					<p className={cls.BenefitsList__text}>
						<p>PDF-файл "5 преимуществ</p>
						{!isSmallMobile ? <p>профессии фронтенд разработчика"</p> : <p>профессии веб-дизайнера" </p>}
					</p>
				</div>
			</li>
		</ul>
	);
};
