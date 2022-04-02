import styles from "../playlists.module.scss"
import { AiOutlineClockCircle, FiPlayCircle, FaChevronRight } from "@icons"

const PlaylistCard = ({ title, count, selected, onClick }) => {
    return (
        <div className={`${styles.playlist_card} ${selected ? styles.active : ""}`} onClick={onClick}>
            <div className={styles.block}>
                <span className={styles.name}>{title}</span>
                <span className={styles.info}>
                    <span><AiOutlineClockCircle /> 00 Hours</span>
                    <span><FiPlayCircle /> {count} Videos</span>
                </span>
            </div>
            <FaChevronRight className={styles.arrow} />
        </div>
    )
}

export default PlaylistCard