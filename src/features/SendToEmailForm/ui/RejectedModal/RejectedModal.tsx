import clsx from "clsx";
import { FC } from "react";
import { Modal } from "@/shared/ui/Modal";
import cls from "./RejectedModal.module.scss";

interface RejectedModalProps {
	className?: string;
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

export const RejectedModal: FC<RejectedModalProps> = ({ className, isOpen, setIsOpen }) => {
	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen} className={clsx(cls.RejectedModal, {}, [className])}>
			<h2 className={cls.RejectedModal__title}>Случилась непредвиденная ошибка</h2>
			<p className={cls.RejectedModal__text}>Ваша заявка не была отправлена. Попробуйте ещё раз</p>
		</Modal>
	);
};
