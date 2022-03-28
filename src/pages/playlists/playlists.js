import styles from "./playlists.module.scss"
import PlaylistPane from "./sub-components/playlist-pane"
import { VideoCard, SidePane } from "@components"
import { Button } from "react-felix-ui"

const Playlists = () => {
    return (
        <div className={styles.container}>
            {/* <SidePane title="Playlists">
                <Button variant="ghost" isRound={true}>Create Playlist</Button>
            </SidePane> */}
            <PlaylistPane />
            <div className={styles.main}>
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
            </div>
        </div>
    )
}

export default Playlists