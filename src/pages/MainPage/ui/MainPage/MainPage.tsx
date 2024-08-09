import clsx from "clsx";
import {
	FC, memo,
} from "react";
import { useMediaQuery } from "react-responsive";
import { Page } from "@/widgets/Page";
import { SendToEmailForm } from "@/features/SendToEmailForm";
import { Devices } from "@/shared/const/common";
import { Container } from "@/shared/ui/Container";
import { BenefitsList } from "../BenefitsList/BenefitsList";
import { Information } from "../Information/Information";
import cls from "./MainPage.module.scss";

interface MainPageProps {
	className?: string;
}

export const MainPage: FC<MainPageProps> = memo(({ className }) => {
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });

	return (
		<Page className={clsx(cls.MainPage, {}, [className])}>
			<section className={cls.MainPage__section}>
				<Container className={cls.MainPage__container}>
					<Information className={cls.MainPage__information} />
					<SendToEmailForm className={cls.MainPage__form} />
					{isMobile && <BenefitsList className={cls.MainPage__benefitsList} />}
				</Container>
			</section>
		</Page>
	);
});
