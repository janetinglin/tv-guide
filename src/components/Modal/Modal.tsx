import React from "react";
import styles from "./styles.module.css";

interface Props {
	isOpen: boolean;
	onCloseModal: () => void;
	modalBodyContent: React.ReactNode;
}

function Modal({ isOpen, onCloseModal, modalBodyContent }: Props) {
	return isOpen ? (
		<div className={styles["modal"]}>
			<div className={styles["modal__content"]}>
				<div className={styles["modal__header"]}>
					<button
						onClick={onCloseModal}
						className={styles["modal__close-button"]}
					>
						Close
					</button>
				</div>
				<div className={styles["modal__body"]}>{modalBodyContent}</div>
				<div className={styles["modal__footer"]}></div>
			</div>
		</div>
	) : null;
}

export default Modal;
