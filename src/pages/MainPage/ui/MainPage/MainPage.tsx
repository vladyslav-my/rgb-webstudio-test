import emailjs from "@emailjs/browser";
import clsx from "clsx";
import { FC, memo } from "react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { Page } from "@/widgets/Page";
import { Devices } from "@/shared/const/common";
import { Button } from "@/shared/ui/Buttons";
import { Container } from "@/shared/ui/Container";
import { Field } from "@/shared/ui/Fields";
import GlobeIcon from "../../assets/globe.svg?react";
import { BenefitsList } from "../BenefitsList/BenefitsList";
import cls from "./MainPage.module.scss";

interface MainPageProps {
	className?: string;
}

export const MainPage: FC<MainPageProps> = memo(({ className }) => {
	const isMobile = useMediaQuery({ maxWidth: Devices.MOBILE });

	const { register, handleSubmit, formState: { errors } } = useForm();
	console.log(errors);
	const onSubmit = (data: any) => {
		console.log(data);

		emailjs
			.send("service_dc1j43l", "template_l6z5b66", data, { publicKey: "WEPl72IEviXkxCLPX" }).then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
				},
				(error) => {
					console.log("FAILED...", error);
				},
			);
	};

	return (
		<Page className={clsx(cls.MainPage, {}, [className])}>
			<section className={cls.MainPage__section}>
				<Container className={cls.MainPage__container}>
					<div className={cls.MainPage__information}>
						<div className={clsx(cls.Webinar, cls.MainPage__webinar)}>
							<GlobeIcon className={cls.Webinar__icon} />
							Вебинар
						</div>
						<h1 className={clsx(cls.Title, cls.MainPage__title)}>
							<span className={cls.Title__main}>front-end</span>
							<span>
								<div className={cls.Title__mark}>
									<span className={cls.Title__marked}>с нуля</span>
								</div>
								легкий старт в IT профессии
							</span>
						</h1>
						<p className={clsx(cls.Text, cls.MainPage__text)}>
							Узнайте какими <b className={cls.Text__bold}>навыками должен обладать фронтенд разработчик в 2022 году</b> и как начать карьеру в востребованной профессии
						</p>
						{!isMobile && <BenefitsList />}
					</div>
					<form className={clsx(cls.Form, cls.MainPage__form)} onSubmit={handleSubmit(onSubmit)}>
						<p className={cls.Form__title}>
							Запишитесь <span className={cls.Form__redSpan}>бесплатно</span>
							<span>и получите подарок</span>
						</p>
						<div className={cls.Form__fields}>
							<Field
								error={errors.name?.message}
								placeholder="Ваше имя и фамилия"
								{
									...register("name", {
										required: "Поле обязательно к заполнению",
									})
								}
							/>
							<Field
								error={errors.phone?.message}
								placeholder="Ваш номер телефона"
								// error={errors.phone}
								{
									...register("phone", {
										required: "Поле обязательно к заполнению",
										pattern: {
											value: /^(\+380|0)\d{9}$/,
											message: "Некорректный номер телефона",
										},
									})
								}
							/>
							<Field
								error={errors.email?.message}
								placeholder="Ваш email"
								// error={errors.email}
								{
									...register("email", {
										required: "Поле обязательно к заполнению",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Некорректный email",
										},
									})
								}
							/>
						</div>
						<Button className={cls.Form__button} type="submit">Записаться бесплатно</Button>
						<p className={cls.Policy}>Нажимая на кнопку я согашаюсь
							<a className={cls.Policy__link} href="#">c политикой конфидециальности</a>
						</p>
					</form>
					{isMobile && <BenefitsList className={cls.MainPage__benefitsList} />}
				</Container>
			</section>
		</Page>
	);
});
