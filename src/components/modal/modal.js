import styles from "./modal.module.scss"
import ReactDOM from "react-dom"
import { IconButton } from "react-felix-ui";
import { RiCloseFill } from "@icons"
import { useRef } from "react";
const Modal = ({
    size = "sm",
    title,
    children,
    isShowing,
    onClose
}) => {
    const container = useRef()
    const onCloseHandler = (e) => {
        if (e.target === container.current) {
            onClose()
        }
    }

    if (isShowing) {
        return ReactDOM.createPortal(
            <>
                <div ref={container} className={`${styles.container} ${styles[size]}`} onClick={onCloseHandler} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <span className={styles.title}>{title}</span>
                            <IconButton icon={<RiCloseFill />} onClick={onClose} className={styles.close} />
                        </div>
                        <div className={styles.body}>
                            {children}
                        </div>
                    </div>
                </div>
            </>,
            document.querySelector("#modal-root")
        );
    } else return null;
};

export default Modal;