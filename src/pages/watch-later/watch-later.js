import styles from "./watch-later.module.scss"
import { VideoCard, SidePane } from "@components"

const WatchLater = () => {
    return (
        <div className={styles.container}>
            <SidePane title="Watch Later..." time="30 Minutes" count={30} />
            <div className={styles.main}>
                {/* <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" /> */}
            </div>
        </div>
    )
}

export default WatchLater