import styles from "../playlists.module.scss"
import { FiClock, FiPlayCircle, FaChevronRight } from "@icons"


const PlaylistCard = () => {
    return (
        <div className={styles.playlist_card}>
            <div className={styles.block}>
                <span className={styles.name}>My Songs</span>
                <span className={styles.info}>
                    <span><FiClock /> 10 Hours</span>
                    <span><FiPlayCircle /> 10 Videos</span>
                </span>
            </div>
            <FaChevronRight className={styles.arrow} />
        </div>
    )
}

export default PlaylistCard