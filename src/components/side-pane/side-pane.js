import styles from "./side-pane.module.scss"
import { ReactComponent as Forest } from "@assets/svg/forest.svg"
import { FiPlayCircle } from "@icons"
const SidePane = ({ title, count, children }) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>

            <div className={styles.details}>
                {count !== false && count !== 0 && <div className={styles.pill}>
                    <FiPlayCircle /> {count} Videos
                </div>
                }
            </div>
            {children && <div className={styles.actions}>
                {children}
            </div>}
            <Forest className={styles.forest} />
        </div>
    )
}

export default SidePane