import styles from "../playlists.module.scss"
import { Button } from "react-felix-ui"
import PlaylistCard from "./playlist-card"
const PlaylistPane = ({ playlists, selectedPlaylistId, onCreate, onSelectPlaylist }) => {
    return (
        <div className={styles.pane}>
            <div className={styles.pane_header}>
                <h4>Playlists</h4>
                <Button size="sm" isTransform={false} onClick={onCreate}>Create New</Button>
            </div>
            <div className={styles.pane_body}>
                {playlists.map(({ _id, title, count }) => {
                    return <PlaylistCard
                        title={title}
                        count={count}
                        selected={_id === selectedPlaylistId && true}
                        onClick={() => onSelectPlaylist(_id)}
                        key={_id}
                    />
                })}
            </div>
        </div>
    )
}

export default PlaylistPane