import styles from "./side-pane.module.scss"
import { ReactComponent as Forest } from "@assets/svg/forest.svg"
import { FiClock, FiPlayCircle } from "@icons"
const SidePane = ({ title, time, count, children }) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>

            <div className={styles.details}>
                {time && <div className={styles.pill}>
                    <FiClock />{time}
                </div>}
                {count && <div className={styles.pill}>
                    <FiPlayCircle /> {count} Videos
                </div>}
            </div>
            {children && <div className={styles.actions}>
                {children}
            </div>}
            <Forest className={styles.forest} />
        </div>
    )
}

export default SidePane