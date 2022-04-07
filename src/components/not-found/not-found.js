import styles from "./not-found.module.scss"
import telescope from "@assets/images/telescope.png"
import { Image } from "react-felix-ui"
const NotFound = ({ title, des }) => {
    return (
        <div className={styles.container}>
            <Image src={telescope} alt="telescope" className={styles.image} />
            <h2>{title}</h2>
            <p>{des}</p>
        </div>
    )
}

export default NotFound