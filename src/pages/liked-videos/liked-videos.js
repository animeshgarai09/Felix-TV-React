import styles from "./liked-videos.module.scss"
import { VideoCard, SidePane } from "@components"
const LikedVideos = () => {
    return (
        <div className={styles.container}>
            <SidePane title="Liked Videos" time="30 Minutes" count={4} />
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

export default LikedVideos