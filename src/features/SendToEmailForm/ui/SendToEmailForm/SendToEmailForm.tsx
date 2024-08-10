import emailjs from "@emailjs/browser";
import clsx from "clsx";
import {
	FC, memo, useCallback, useState,
} from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/shared/ui/Buttons";
import { Field, PhoneNumberField } from "@/shared/ui/Fields";
import { FulfiledModal } from "../FulfiledModal/FulfiledModal";
import { RejectedModal } from "../RejectedModal/RejectedModal";
import cls from "./SendToEmailForm.module.scss";

interface SendToEmailFormProps {
	className?: string;
}

export const SendToEmailForm: FC<SendToEmailFormProps> = memo(({ className }) => {
	const [isOpenFulfiledModal, setIsOpenFulfiledModal] = useState(false);
	const [isOpenRejectedModal, setIsOpenRejectedModal] = useState(false);
	const {
		handleSubmit, control, reset, formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
		},
		mode: "onBlur",
		reValidateMode: "onBlur",
	});

	const onSubmit = useCallback((data: any) => {
		// console.log(data);
		emailjs
			.send("service_dc1j43l", "template_l6z5b66", data, { publicKey: "WEPl72IEviXkxCLPX" }).then(
				(response) => {
					setIsOpenFulfiledModal(true);
					reset();
				},
				(error) => {
					setIsOpenRejectedModal(true);
				},
			);
	}, [reset]);

	return (
		<>
			<RejectedModal isOpen={isOpenRejectedModal} setIsOpen={setIsOpenRejectedModal} />
			<FulfiledModal isOpen={isOpenFulfiledModal} setIsOpen={setIsOpenFulfiledModal} />
			<form className={clsx(cls.SendToEmailForm, [className])} onSubmit={handleSubmit(onSubmit)}>
				<p className={cls.SendToEmailForm__title}>
					Запишитесь <span className={cls.SendToEmailForm__redSpan}>бесплатно</span>
					<span>и получите подарок</span>
				</p>
				<div className={cls.SendToEmailForm__fields}>
					<Controller
						control={control}
						name="name"
						rules={{
							required: "Поле обязательно к заполнению",
							minLength: { value: 2, message: "Ім’я повинно містити мінімум 2 символи" },
							maxLength: { value: 30, message: "Ім’я повинно містити максимум 30 символів" },
							pattern: {
								value: /^[^\s]+(\s+[^\s]+)*$/,
								message: "Имя не должно состоять из пробелов",
							},
						}}
						render={({ field }) => (
							<Field
								error={errors.name?.message}
								withValidation
								placeholder="Ваше имя и фамилия"
								{...field}
							/>
						)}
					/>
					<Controller
						control={control}
						name="phone"
						rules={{
							required: "Поле обязательно к заполнению",
							pattern: {
								value: /^\+[1-9]\d{0,2}[1-9]\d{6,14}$/,
								message: "Некорректный номер телефона",
							},
						}}
						render={({ field }) => (
							<PhoneNumberField
								placeholder="Ваш номер телефона"
								error={errors.phone?.message}
								withValidation
								{...field}
							/>
						)}
					/>
					<Controller
						control={control}
						name="email"
						rules={{
							required: "Поле обязательно к заполнению",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Некорректный email",
							},
						}}
						render={({ field }) => (
							<Field
								error={errors.email?.message}
								withValidation
								placeholder="Ваш email"
								{...field}
							/>
						)}
					/>
				</div>
				<Button className={cls.SendToEmailForm__button} type="submit">Записаться бесплатно</Button>
				<p className={cls.Policy}>Нажимая на кнопку я согашаюсь
					<a className={cls.Policy__link} href="#">c политикой конфидециальности</a>
				</p>
			</form>
		</>
	);
});
