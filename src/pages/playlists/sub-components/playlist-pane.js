import styles from "../playlists.module.scss"
import { Button } from "react-felix-ui"
import PlaylistCard from "./playlist-card"
const PlaylistPane = () => {
    return (
        <div className={styles.pane}>
            <div className={styles.pane_header}>
                <h4>Playlists</h4>
                <Button size="sm" isTransform={false}>Create New</Button>
            </div>
            <div className={styles.pane_body}>
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
            </div>
        </div>
    )
}

export default PlaylistPane