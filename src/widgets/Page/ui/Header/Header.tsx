import clsx from "clsx";
import {
	FC, memo,
} from "react";
import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo/ui/Logo";
import CalendarIcon from "../../assets/calendar.svg?react";
import TimeIcon from "../../assets/time.svg?react";
import cls from "./Header.module.scss";

interface HeaderProps {
	className?: string;
}

export const Header: FC<HeaderProps> = memo(({ className }) => {
	return (
		<header className={clsx(cls.Header, [className])}>
			<Container className={clsx(cls.Header__container, [])}>
				<Logo className={cls.Header__logo} />
				<div className={cls.Header__menu}>
					<div className={cls.Shell}>
						<CalendarIcon className={cls.Shell__icon} />
						28 декабря
					</div>
					<div className={clsx(cls.Shell, [cls.Shell_small])}>
						<TimeIcon className={cls.Shell__icon} />
						3,5 часа
					</div>
				</div>

			</Container>
		</header>
	);
});
