import styles from "../playlists.module.scss"
import { AiOutlineClockCircle, FiPlayCircle, FaChevronRight } from "@icons"
import { Link } from "react-router-dom"
const PlaylistCard = ({ id, title, count, selected, onClick }) => {
    return (
        <Link to={`/playlists/${id}`} className={styles.links}>
            <div className={`${styles.playlist_card} ${selected ? styles.active : ""}`} onClick={onClick}>
                <div className={styles.block}>
                    <span className={styles.name}>{title}</span>
                    <span className={styles.info}>
                        <span><FiPlayCircle /> {count} Videos</span>
                    </span>
                </div>
                <FaChevronRight className={styles.arrow} />
            </div>
        </Link>
    )
}

export default PlaylistCard