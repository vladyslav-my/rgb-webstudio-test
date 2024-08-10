import clsx from "clsx";
import { FC } from "react";
import { Modal } from "@/shared/ui/Modal";
import cls from "./FulfiledModal.module.scss";

interface FulfiledModalProps {
	className?: string;
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

export const FulfiledModal: FC<FulfiledModalProps> = ({ className, isOpen, setIsOpen }) => {
	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen} className={clsx(cls.FulfiledModal, {}, [className])}>
			<h2 className={cls.FulfiledModal__title}>Успешно</h2>
			<p className={cls.FulfiledModal__text}>Ваша заявка успешно отправлена. Ожидайте, с вами связжеться менеджер</p>
		</Modal>
	);
};
